import { On, } from '@discord-nestjs/core';
import { Injectable, } from '@nestjs/common';
import { ChannelType, Events, Message, } from 'discord.js';

@Injectable()
export class BotGateway {
	@On(Events.MessageCreate)
	onMessage(message: Message) {
		if (message.channel.type !== ChannelType.DM) return

		console.log(`Bot has received DM from ${message.author.displayName}: "${message.content}" `)
	}
}