import { Message } from "discord.js"
import { help, listSuggestions, saveSuggestion } from "../features/suggestion"
import { emitLog } from '../util/logger'

export default async function onMessage(discordMessage: Message) {

    const { content } = discordMessage

    if (!discordMessage.author.bot) {
        const channel = discordMessage.channel

        if(content === 'sugerir'){
            help(discordMessage)
            return
        }
        
        if( content.indexOf('sugerir') > -1){
            saveSuggestion(discordMessage)
            return
        }

        if( content.indexOf('listar_sugestoes') > -1){
            listSuggestions(discordMessage)
            return
        }
    }

}
