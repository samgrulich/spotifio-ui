interface Query
{
	key: string,
	value: string
}

export async function readJsonFile(path: string): Promise<JSON> {
	return JSON.parse(await Deno.readTextFile(path));
} 

export async function writeJsonFile(data: JSON, path: string) {
	await Deno.writeTextFile(path, JSON.stringify(data)) 
}

export async function editJsonFile(path: string, data: Query) {
	let fileData: JSON = await readJsonFile(path);
	
	for(const keyin Object.keys(data))
	{
		fileData[key] = data[key];
	}

	writeJsonFile(fileData, path);
}