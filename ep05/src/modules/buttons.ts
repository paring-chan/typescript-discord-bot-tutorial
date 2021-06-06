import {command, Module} from "@pikostudio/command.ts";
import {Message, MessageActionRow, MessageButton} from "discord.js";

class Buttons extends Module {
    constructor() {
        super(__filename)
    }

    @command()
    async btn(msg: Message) {
        const m = await msg.channel.send('와 샌즈!', {
            components: [
                new MessageActionRow().addComponents(
                    new MessageButton({
                        label: 'PRIMARY',
                        customID: 'primary',
                        style: 'PRIMARY'
                    }),
                    new MessageButton({
                        label: 'SECONDARY',
                        customID: 'secondary',
                        style: 'SECONDARY'
                    }),
                    new MessageButton({
                        label: 'SUCCESS',
                        customID: 'success',
                        style: 'SUCCESS'
                    }),
                    new MessageButton({
                        label: 'DANGER',
                        customID: 'danger',
                        style: 'DANGER'
                    }),
                    new MessageButton({
                        label: 'LINK',
                        style: 'LINK',
                        url: 'https://pikokr.dev/'
                    }),
                )
            ]
        })
        const collector = m.createMessageComponentInteractionCollector(x => x.componentType === 'BUTTON', {
            time: 30000,
        }).on('collect', interaction => {
            interaction.reply(interaction.customID)
            collector.stop()
        }).on('end', () => {
            m.edit({
                components: []
            })
        })
    }
}

export function install() {
    return new Buttons()
}
