import { Channel, ChannelResolvable, Client } from "discord.js"

export function emitLog(client : Client, content : string, channelName='bot-log'){
    try {
        //@ts-ignore
        const channel = client.channels.cache.find( item => item.name === channelName)

        if (!channel || (channel && !channel.isText())) {
            console.error(`The channel ${channelName} is not a TextChannel !`)
            return
        }

        const data = {
            content
        }

        channel.send(data)
    } catch (err) {
        console.error(err)
    }
}

