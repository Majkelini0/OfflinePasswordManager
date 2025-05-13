import * as url from "node:url";

export class Password {
    private _pos: number
    private _name: string;
    private _url: string;
    private _login: string;
    private _password: string;
    private _comment: string;

    public static counter = 0;

    constructor(name: string, url: string, login: string, password: string, comment: string) {
        this._pos = Password.counter
        this._name = name;
        this._url = url;
        this._login = login;
        this._password = password;
        this._comment = comment;
        Password.counter += 1;
    }

    static fromJSON(json: string): Password {
        const data = JSON.parse(json);
        return new Password(data.name, data.url, data.login, data.password, data.comment);
    }

    get name(): string {
        return this._name;
    }

    get url(): string {
        return this._url;
    }

    get login(): string {
        return this._login;
    }

    get password(): string {
        return this._password;
    }

    get comment(): string {
        return this._comment;
    }
}
