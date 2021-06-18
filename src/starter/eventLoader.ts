import { Client } from 'discord.js'
import { readdir } from 'fs/promises'
import { resolve } from 'path'

function getEventName(filename: string) {
    return filename.substring(2, filename.length).replace(/\.ts/g, '')
}

export async function eventLoader(client: Client) {
    const eventPath = resolve(__dirname, '../events/')
    const fileList = await readdir(eventPath, 'utf-8')
    fileList.forEach(filename => {
        const eventName = getEventName(filename).toLocaleLowerCase()
        const eventFunction = require(`${eventPath}/${filename}`).default
        console.log(`Setting up ${eventName} event`)
        client.on(eventName, eventFunction)
    })

}