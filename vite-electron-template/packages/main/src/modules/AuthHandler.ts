import type {AppModule} from '../AppModule.js';
import {ModuleContext} from '../ModuleContext.js';
import {PasswordManager} from './PasswordManager.js';
import {ConfigManager} from './ConfigManager.js';
import {ipcMain, dialog} from 'electron';
import bcrypt from 'bcrypt';

class AuthHandler implements AppModule {
    private passwordManager: PasswordManager | null = null;
    // private configManager: ConfigManager | null = null;

    async enable({app}: ModuleContext): Promise<void> {

        ipcMain.handle('main:getAllServices', async (_event, loginData) => {
            try{
                const credentials = JSON.parse(loginData);
                const passwordManager = PasswordManager.fromLogin(credentials.filePath);
                await passwordManager.setMasterPassword(credentials.password);
                await passwordManager.authenticatePassword();

                const services = await passwordManager.getAllServices();

                return {success: true, message: 'User login successfully', services: services};
            } catch (error) {
                console.error('Login error:', error);
                return {success: false, message: 'Login failed'};
            }
        });

        ipcMain.handle('auth:register', async (_event, registerData) => {
            try {
                const credentials = JSON.parse(registerData);
                const passwordManager = PasswordManager.fromRegistration(credentials.folderPath, credentials.login);

                await passwordManager.setMasterPassword(credentials.password);
                await passwordManager.createEncryptedPasswordsFile();

                return {success: true, message: 'User registered successfully'};
            } catch (error) {
                console.error('Registration error:', error);
                return {success: false, message: 'Registration failed'};
            }
        });

        ipcMain.handle('auth:login', async (_event, loginData) => {
            try {
                const credentials = JSON.parse(loginData);
                const passwordManager = PasswordManager.fromLogin(credentials.filePath);
                await passwordManager.setMasterPassword(credentials.password);
                await passwordManager.authenticatePassword();

                this.passwordManager = passwordManager;
                return {success: true, message: 'User login successfully'};
            } catch (error) {
                console.error('Login error:', error);
                return {success: false, message: 'Login failed'};
            }
        })

        ipcMain.handle('dialog:selectFolder', async (_event) => {
            const result = await dialog.showOpenDialog({
                properties: ['openDirectory', 'createDirectory'],
                title: 'Select Folder for Password Storage',
                buttonLabel: 'Select Folder'
            })
            if (result.canceled) {
                return {canceled: true, filePath: null};
            }

            return {canceled: false, filePath: result.filePaths[0]};
        })

        ipcMain.handle('dialog:selectFile', async (_event) => {
            const result = await dialog.showOpenDialog({
                properties: ['openFile'],
                title: 'Select Password File',
                buttonLabel: 'Select File'
            })
            if (result.canceled) {
                return {canceled: true, filePath: null};
            }

            return {canceled: false, filePath: result.filePaths[0]};
        })

        ipcMain.handle('auth:getPasswords', async (_event) => {

        })
    }
}

export function createAuthHandler() {
    return new AuthHandler();
}
