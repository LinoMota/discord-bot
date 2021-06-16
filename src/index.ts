import generageXingamento from './xingamentos'

import * as dotenv from 'dotenv'
import * as discord from 'discord.js'
import * as path from 'path'
import { on } from 'events'

dotenv.config({
    path: path.resolve(__dirname + "/../.env")
})

const botToken = process.env.DISCORD_BOT_TOKEN

const client = new discord.Client();
client.login(botToken);

client.on("ready", () => {
    console.log("The app is ready and connected")
})

client.on('message', async (msg : discord.Message) => {

    if(!(msg.author.username === 'Lino'))
        msg.reply(await generageXingamento())

    if (msg.member?.voice.channel && msg.content.indexOf('bruh') > -1){
        const connection = await msg.member.voice.channel.join();
        connection.play('./sound/teste.mp3')
    }

})

