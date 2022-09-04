import { Tokens } from "./types.ts";

export class LoginData
{
    userId: string;
    tokens: Tokens; 

    constructor(userId: string, tokens: Tokens)
    {
        this.userId = userId;
        this.tokens = tokens;
    }

    get isLogged(): boolean
    {
        return typeof this.userId === "string"; 
    }
}