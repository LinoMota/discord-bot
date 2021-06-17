import { Message } from "discord.js"
import { emitLog } from '../util/logger'

export default async function onMessage(discordMessage : Message) {

    if(!discordMessage.author.bot){
        const channel = discordMessage.channel
    }
    
}
