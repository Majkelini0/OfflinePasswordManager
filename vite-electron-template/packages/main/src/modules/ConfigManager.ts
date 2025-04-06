import {app} from 'electron';
import fs from 'fs';
import path from 'path';
import {AppModule} from "../AppModule.js";
import {ModuleContext} from "../ModuleContext.js";

export class ConfigManager {
    private configFilePath: string;

    // async enable({app}: ModuleContext): Promise<void> {
    //
    // }

    constructor() {
        const userDataPath = app.getPath('userData');
        this.configFilePath = path.join(userDataPath, 'PasswordManager_config.json');
    }

    // Read the config file
    readConfig(): Record<string, any> {
        if (!fs.existsSync(this.configFilePath)) {
            return {};
        }

        const fileContent = fs.readFileSync(this.configFilePath, 'utf8');
        return JSON.parse(fileContent);
    }

    // Write to the config file
    writeConfig(config: Record<string, any>): void {
        const dataString = JSON.stringify(config, null, 2);
        fs.writeFileSync(this.configFilePath, dataString);
    }
}

//export default new ConfigManager();
