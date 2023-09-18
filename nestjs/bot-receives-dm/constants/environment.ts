import 'dotenv/config';

if (!process.env.DISCORD_TOKEN) throw Error('INVALID: process.env.DISCORD_TOKEN');
export const DISCORD_TOKEN = process.env.DISCORD_TOKEN;