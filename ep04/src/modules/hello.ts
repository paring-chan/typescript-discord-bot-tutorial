import {command, Module, rest} from "@pikostudio/command.ts";
import {Message} from "discord.js";

class Hello extends Module {
    constructor() {
        super(__filename);
    }

    @command()
    async hello(msg: Message) {
        await msg.channel.send(`Hello ${msg.author.tag}!`)
    }

    @command()
    async say(msg: Message, @rest content: string) {
        await msg.channel.send(content, {
            disableMentions: 'all'
        })
    }

    @command()
    async dm(msg: Message, @rest content: string) {
        await msg.author.send(content)
    }
}

export function install() {
    return new Hello()
}