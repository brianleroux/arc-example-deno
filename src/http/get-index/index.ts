import { Context, Event } from "https://deno.land/x/lambda/mod.ts";

export async function handler(event: Event, context: Context) {
  return {
    statusCode: 200,
    headers: {'content-type': 'text/html; charset=utf8'},
    body: `Welcome to deno ${Deno.version.deno} 🦕`
  };
}