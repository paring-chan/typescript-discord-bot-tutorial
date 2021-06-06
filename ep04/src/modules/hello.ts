import {command, Module} from "@pikostudio/command.ts";
import {Message} from "discord.js";

class Hello extends Module {
    constructor() {
        super(__filename);
    }

    @command()
    async hello(msg: Message) {
        await msg.channel.send(`Hello ${msg.author.tag}!`)
    }
}

export function install() {
    return new Hello()
}