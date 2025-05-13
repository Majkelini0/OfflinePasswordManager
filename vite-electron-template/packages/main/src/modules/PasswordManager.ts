import {app} from 'electron';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import {Password} from './Password.js';

export class PasswordManager {
    private static fileExtension = '.mpm';
    private filePath: string;
    private fileName: string;
    private masterPassword: string | null = null;


    constructor(filePath: string, fileName: string) {
        this.filePath = filePath;
        this.fileName = fileName;
    }

    static fromRegistration(folderPath: string, fileName: string): PasswordManager {
        fileName = fileName + this.fileExtension; // !!!
        const filePath = path.join(folderPath, fileName);
        if (folderPath == null) {
            folderPath = app.getPath('documents');
        }
        if (!fs.existsSync(folderPath)) {
            throw new Error('Folder does not exist');
        }
        if (fs.existsSync(filePath)) {
            throw new Error('File already exists');
        }
        return new PasswordManager(filePath, fileName);
    }

    static fromLogin(filePath: string): PasswordManager {
        if (!filePath.endsWith(this.fileExtension)) {
            throw new Error('Invalid file extension');
        }
        if (!fs.existsSync(filePath)) {
            throw new Error('File does not exist');
        }
        return new PasswordManager(filePath, path.basename(filePath));
    }

    async authenticatePassword(): Promise<void> {
        try {
            if (!this.masterPassword) {
                throw new Error('Master password not set');
            }
            if (!fs.existsSync(this.filePath)) {
                throw new Error('Password file does not exist');
            }

            const encryptedFile = fs.readFileSync(this.filePath, 'utf8');
            if (!encryptedFile || encryptedFile.length === 0) {
                throw new Error('Password file is empty');
            }

            this.decrypt(encryptedFile);

        } catch (error) {
            throw new Error('fun(authenticatePassword)/ ' + error.message);
        }
    }

    async setMasterPassword(password: string): Promise<void> {
        // some validation
        this.masterPassword = password;
    }

    async getAllPasswords(): Promise<Password[]> {
        const encryptedFile = fs.readFileSync(this.filePath, 'utf8');
        const decryptedData = await this.decrypt(encryptedFile);
        return decryptedData as Password[];
    }

    async createEncryptedPasswordsFile(): Promise<void> {
        if (!this.masterPassword) {
            throw new Error('Master password not set');
        }
        const initialPasswords: Password[] = []; // Initialize with an empty array
        initialPasswords.push(new Password('gakko', 'www.gakko.com', 's27799', 'admin', 'comment'));
        initialPasswords.push(new Password('dataiku', 'www.dataiku.com', 'L25_126', 'haslo', 'comment'));
        await this.savePasswords(initialPasswords);
    }

    private async savePasswords(passwords: Password[]): Promise<void> {
        const encryptedFile = this.encrypt(passwords);

        // Create directory if it doesn't exist
        const dir = path.dirname(this.filePath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, {recursive: true});
        }

        try {
            fs.writeFileSync(this.filePath, encryptedFile);
        } catch (error) {
            throw new Error('Failed to save password file: ' + error.message);
        }
    }

    private encrypt(passwordsArray: Password[]): string {
        if (!this.masterPassword) {
            throw new Error('Master password not set');
        }

        const salt = crypto.randomBytes(16).toString('hex');
        const dataString = JSON.stringify(passwordsArray);
        // Generate a random IV for each encryption
        const iv = crypto.randomBytes(16);
        // Derive key from master password
        const key = this.deriveKeyFromPassword(this.masterPassword, salt);
        // Create cipher and encrypt data
        const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
        let encrypted = cipher.update(dataString, 'utf8', 'base64');
        encrypted += cipher.final('base64');
        return JSON.stringify({
            salt: salt,
            iv: iv.toString('hex'),
            data: encrypted
        });
    }

    private decrypt(encryptedFile: string): Password[] {
        if (!this.masterPassword) {
            throw new Error('Master password not set');
        }

        const {salt, iv, data} = JSON.parse(encryptedFile);
        const key = this.deriveKeyFromPassword(this.masterPassword, salt);

        try {
            const decipher = crypto.createDecipheriv(
                'aes-256-cbc',
                key,
                Buffer.from(iv, 'hex')
            );

            let decrypted = decipher.update(data, 'base64', 'utf8');
            decrypted += decipher.final('utf8');

            // Verify the decrypted content is valid JSON
            const parsedData = JSON.parse(decrypted);
            // console.log("Successfully decrypted the file");
            return Array.isArray(parsedData) ? parsedData : []; // Ensure it's an array
        } catch (error) {
            this.masterPassword = null;
            throw new Error('fun(decrypt): Invalid password');
        }
    }

    // Add this method to generate an encryption key from the master password
    private deriveKeyFromPassword(password: string, salt: string): Buffer {
        // Use PBKDF2 to derive a key from the password
        // The salt should be stored with the file or derived in a consistent way
        // Consider using a consistent app-specific value
        return crypto.pbkdf2Sync(password, salt, 10000, 32, 'sha256');
    }
}
