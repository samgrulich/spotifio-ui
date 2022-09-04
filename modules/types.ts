export class AccessToken
{
    accessToken: string;
    timeToLive: number;
    spawnTime: number;

    constructor(accessToken: string, timeToLive: number)
    {
        const date = new Date();

        this.accessToken = accessToken;
        this.timeToLive = timeToLive;
        this.spawnTime = date.getMilliseconds();
    }

    get isValid(): boolean
    {
        const date = new Date();
        const currentTime = date.getMilliseconds();

        const expirationTime = this.spawnTime + this.timeToLive;

        return currentTime < expirationTime;
    }
}

export class Tokens
{
    private refreshToken: string;
    accessToken: AccessToken;

    constructor(refreshToken: string, accessToken="", timeToLive=0) 
    {
        this.refreshToken = refreshToken;

        if(accessToken === "")
            this.accessToken = this.refreshAccess();
        else
            this.accessToken = new AccessToken(accessToken, timeToLive);
    }
    
    refreshAccess(): AccessToken 
    {
        // // refresh token
        return new AccessToken("", 0)
    } 
    
    get token(): string
    {
        if(!this.accessToken.isValid)
            this.refreshAccess()

        return this.accessToken.accessToken;
    }
}