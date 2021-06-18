import { Message } from 'discord.js'
import SuggestionModel from '../db/model/SuggestionModel'

const helpMessage = 'Para sugerir uma ideia '
    + 'para o bot basta digitar: sugerir <sua_sugestao>\n'
    + 'Caso queira listar: listar_sugestoes'

export async function saveSuggestion(msg: Message) {

    const { content, author } = msg

    const messageStartIndex = content.indexOf('sugerir ')

    if(messageStartIndex < 0){
        msg.reply('Para sugerir preciso que esteja neste formato:\n>sugerir <sua_sugestao>')
        return
    }

    const description = content.substr(messageStartIndex, content.length)

    if (description.length === 0){
        msg.reply('Preciso de um texto para sua sugestao !')
        return
    }

    const data = {
        description,
        author: author.username
    }

    try {
        (await new SuggestionModel(data)).save()
        msg.reply('Sugestao salva!')
    } catch (err) {
        msg.reply('Mals kk n consegui salvar')
        console.log(err)
        return
    }

}

export async function listSuggestions(msg: Message) {
    try {
        const queryRes = await SuggestionModel.find()
        let response = ''

        queryRes.forEach(res => {
            response = `${response}${res.author}|${res.description}\n`
        })

        msg.reply(`Sugestoes :\n${response}`)
    } catch (err) {
        msg.reply('Mals kk n consegui resgatar as sugestoes')
        console.log(err)
        return
    }

}


export function help(msg: Message) {
    msg.reply(helpMessage)
}