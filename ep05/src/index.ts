import {CommandClient} from "@pikostudio/command.ts";
import fs from "fs";
import path from "path";
import {Intents} from "discord.js";
const config = require('../config.json')

const client = new CommandClient({intents: Intents.ALL}, {
    owners: 'auto',
    prefix: config.prefix
})

fs.readdirSync(path.join(__dirname, 'modules')).forEach(x => {
    client.registry.loadModule(path.join(__dirname, 'modules', x))
})

client.on('ready', () => console.log('Logged in as ' + client.user!.tag))

client.login(config.token)
