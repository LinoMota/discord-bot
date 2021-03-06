
import { eventLoader } from './eventLoader'
import { Client } from 'discord.js'
import databaseConnection from '../db/db'

async function tryLogin(client: Client) {
    const botToken = process.env.DISCORD_BOT_TOKEN
    
    try {
        await client.login(botToken)
    } catch (err) {
        console.error(`Could not start the bot, Falied on login ! ${err}`)
        return false
    }

    return true
}

async function sleep(ms: number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ms)
        }, ms)
    })
}


export async function applicationStarter() {
    const client = new Client()

    if (!(await tryLogin(client)))
        return
        
    await databaseConnection()

    await eventLoader(client)
}