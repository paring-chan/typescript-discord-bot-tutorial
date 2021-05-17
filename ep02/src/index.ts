import {CommandClient} from "@pikostudio/command.ts";
// @ts-ignore
import config from '../config.json'

const client = new CommandClient({}, {
    owners: 'auto',
    prefix: config.prefix
})

client.on('ready', () => console.log('Logged in as ' + client.user!.tag))

client.login(config.token)
