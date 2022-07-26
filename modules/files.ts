export async function readJsonFile(path: string): Promise<JSON> {
	return JSON.parse(await Deno.readTextFile(path));
} 

export async function writeJsonFile(data: JSON, path: string) {
	await Deno.writeTextFile(path, JSON.stringify(data)) 
}

export async function editJsonFile(path: string, data: Record<string, unknown>) {
	let fileData: JSON = await readJsonFile(path);

	// writeJsonFile(fileData, path);
}


function matchObjects(orig: Record<string, unknown>, query: Record<string, unknown>)
{
	for(const key in Object.keys(query))
	{
        if (orig[key] !instanceof Object)
            orig[key] = query[key];

        if (key in Object.keys(orig) )
        {
            matchObjects(orig[key], query[key]);
        }
	}
}

editJsonFile("../import_map.json", {"imports": {"@root": Deno.realPath("./")}})