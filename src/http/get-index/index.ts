export async function handler(req:object) {
  return {
    statusCode: 200,
    headers: {'content-type': 'text/html; charset=utf8'},
    body: `Welcome to deno ${Deno.version.deno} 🦕`
  };
}
