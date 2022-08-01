import { dbClient, ExecuteStatementCommand } from "./init.ts";

const TABLENAME = "Users";

async function getUser(userID: string)
{
    const params = {
        Statement: `SELECT * FROM ${TABLENAME} WHERE id=?`,
        Parameters: [{ S: userID }],
    };

    try
    {
        const data = await dbClient.send(new ExecuteStatementCommand(params));
        return data.Items;
    }
    catch (err)
    {
        console.log(err);
        return null;
    }
}

// required: userID, email, refreshToken, playlists
async function createUser(userID: string)
{
    const user = getUser(userID);
}