import {app} from 'electron';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

export class PasswordManager {
    private filePath: string;
    private fileName: string;
    private masterPassword: string | null = null;

    constructor(filePath: string, fileName: string) {
        this.filePath = filePath;
        this.fileName = fileName;
    }

    static fromRegistration(folderPath: string, fileName: string): PasswordManager {
        if (folderPath == null) {
            folderPath = app.getPath('documents');
        }
        if (!fs.existsSync(folderPath)) {
            throw new Error('Folder does not exist');
        }
        if (fs.existsSync(path.join(folderPath, fileName))) {
            throw new Error('File already exists');
        }
        return new PasswordManager(path.join(folderPath, fileName), fileName);
    }

    static fromLogin(filePath: string): PasswordManager {
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
            this.masterPassword = null;
            if (error.message === 'Invalid password') {
                throw error;
            } else {
                throw new Error('Authentication failed: ' + error.message);
            }
        }
    }

    async setMasterPassword(password: string): Promise<void> {
        this.masterPassword = password;
    }

    async addPassword(service: string, username: string, password: string): Promise<void> {
        if (!this.masterPassword) {
            throw new Error('Master password not set');
        }

        const passwords = await this.getPasswords();

        passwords[service] = {
            username,
            password,
            createdAt: new Date().toISOString(),
        };

        await this.savePasswords(passwords);
    }

    async getPassword(service: string): Promise<{ username: string, password: string } | null> {
        const passwords = await this.getPasswords();
        return passwords[service] || null;
    }

    async getAllServices(): Promise<string[]> {
        const passwords = await this.getPasswords();
        return Object.keys(passwords);
    }

    async deletePassword(service: string): Promise<boolean> {
        const passwords = await this.getPasswords();

        if (!passwords[service]) return false;

        delete passwords[service];
        await this.savePasswords(passwords);
        return true;
    }

    private async getPasswords(): Promise<Record<string, any>> {
        if (!this.masterPassword) {
            throw new Error('Master password not set');
        }

        if (!fs.existsSync(this.filePath)) {
            return {};
        }

        try {
            const fileContent = fs.readFileSync(this.filePath, 'utf8');
            if (!fileContent || fileContent.length === 0) return {};

            // Parse the stored data
            const {salt, iv, data} = JSON.parse(fileContent);

            // Derive key from master password
            const key = this.deriveKeyFromPassword(this.masterPassword, salt);

            // Create decipher and decrypt
            const decipher = crypto.createDecipheriv(
                'aes-256-cbc',
                key,
                Buffer.from(iv, 'hex')
            );

            let decrypted = decipher.update(data, 'base64', 'utf8');
            decrypted += decipher.final('utf8');

            return JSON.parse(decrypted);
        } catch (error) {
            console.error('Failed to decrypt password file:', error);
            return {};
        }
    }

    async createEncryptedPasswordsFile(): Promise<void> {
        if (!this.masterPassword) {
            throw new Error('Master password not set');
        }

        const example = {
            'example.com': {
                url: 'www.url.com',
                login: 'example@gmail.com',
                password: 'password',
                comment: 'example comment',
                // lastEdited: new Date().toISOString(),
            }
        }

        await this.savePasswords(example);
        // const passwords = await this.getPasswords();
        // await this.savePasswords(passwords);
    }

    private async savePasswords(passwords: Record<string, any>): Promise<void> {
        const encryptedFile = this.encrypt(passwords);

        // Create directory if it doesn't exist
        const dir = path.dirname(this.filePath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, {recursive: true});
        }

        try {
            fs.writeFileSync(this.filePath, encryptedFile);
        } catch (error) {
            throw new Error('Failed to save password file');
        }
    }

    private encrypt(passwords: Record<string, any>) {
        if (!this.masterPassword) {
            throw new Error('Master password not set');
        }

        const salt = crypto.randomBytes(16).toString('hex');
        const dataString = JSON.stringify(passwords);
        // Generate a random IV for each encryption
        const iv = crypto.randomBytes(16);
        // Derive key from master password
        const key = this.deriveKeyFromPassword(this.masterPassword, salt);
        // Create cipher and encrypt data
        const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
        let encrypted = cipher.update(dataString, 'utf8', 'base64');
        encrypted += cipher.final('base64');
        const result = JSON.stringify({
            salt: salt,
            iv: iv.toString('hex'),
            data: encrypted
        });
        return result;
    }

    private decrypt(encryptedFile: string) {
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
            JSON.parse(decrypted);
            console.log("valid JSON");

            // If we reach here, decryption was successful
            return;
        } catch (error) {
            this.masterPassword = null;
            console.log("Invalid password");
            throw new Error('Invalid password');
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
