import { getApi } from "../api/functions.ts";

async function getDate(query: {date: string | Date})
{
    await getApi(`/versions/snapshots/${query.date}`);
}

async function getSnapshotDetails(query: {snapId: string})
{
    await getApi(`/versions/snapshots/detail/${query.snapId}`);
}

async function getNextChunk(query: {snapId: string, currentChunk: any})
{
    await getApi(`/versions/snapshots/chunk/${query.snapId}/${query.currentChunk["previousChunk"]}`);
}