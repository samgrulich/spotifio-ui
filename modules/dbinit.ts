import { DB } from "sqlite3";

const dbsPath: string = "./dbs";

const auth: DB = await createDB("auth");
const main: DB = await createDB("main");

auth.query(`
    CREATE TABLE IF NOT EXISTS users 
    (
        id INTEGER PRIMARY KEY, 
        name TEXT,
        password TEXT
    );

    CREATE TABLE IF NOT EXISTS tokens
    (
        userid TEXT REFERENCES users(id) ON DELETE CASCADE,
        token TEXT
    );
`);

main.query(`
    CREATE TABLE IF NOT EXISTS users 
    (
        id INTEGER PRIMARY KEY,
        name TEXT
    );

    CREATE TABLE IF NOT EXISTS playlists 
    (
        id INTEGER PRIMARY KEY,
        userid TEXT REFERENCES users(id) ON DELETE CASCADE,
        active NUMERIC DEFAULT "FALSE" NOT NULL,
        pubdate NUMERIC DEFAULT date() NOT NULL,
        snapid TEXT
    );

    CREATE TABLE IF NOT EXISTS snapshots
    (
        hash TEXT PRIMARY KEY,
        previousid TEXT,
        playlistid INTEGER REFERENCES playlists(id) ON DELETE CASCADE,
        trackcount INTEGER,
        pubdate NUMERIC DEFAULT date() NOT NULL,
        alltracks TEXT 
    );
`);


function createDB(name)
{
    const dbPath = `${dbsPath}/${name}.db`;
    Deno.createSync(dbPath);

    return new DB(dbPath);
}