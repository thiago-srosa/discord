import { DiscordModule } from '@discord-nestjs/core';
import { Module } from '@nestjs/common';
import { GatewayIntentBits, Partials } from 'discord.js';
import { BotModule } from './bot/bot.module';
import { DISCORD_TOKEN } from 'constants/environment';

@Module({
	imports: [
		BotModule,
		DiscordModule.forRootAsync({
			useFactory: () => ({
				token: DISCORD_TOKEN,
				discordClientOptions: {
					// Specify which event types the bot needs partial data for 
					// Partial data contains basic info like IDs without full details
					// Useful for caching data
					partials: [
						Partials.Message,
						Partials.Channel,
						Partials.GuildMember,
						Partials.GuildScheduledEvent,
						Partials.Reaction,
						Partials.ThreadMember,
						Partials.User,
					],
					// Specify which gateway events the bot needs to subscribe to and receive
					// Intents determine which event types will be sent from Discord to the bot
					intents: [
						GatewayIntentBits.Guilds,
						GatewayIntentBits.GuildMembers,
						GatewayIntentBits.GuildEmojisAndStickers,
						GatewayIntentBits.GuildIntegrations,
						GatewayIntentBits.GuildWebhooks,
						GatewayIntentBits.GuildInvites,
						GatewayIntentBits.GuildVoiceStates,
						GatewayIntentBits.GuildPresences,
						GatewayIntentBits.GuildMessages,
						GatewayIntentBits.GuildMessageReactions,
						GatewayIntentBits.GuildMessageTyping,
						GatewayIntentBits.DirectMessages,
						GatewayIntentBits.DirectMessageReactions,
						GatewayIntentBits.DirectMessageTyping,
						GatewayIntentBits.MessageContent,
						GatewayIntentBits.GuildScheduledEvents,
						GatewayIntentBits.AutoModerationConfiguration,
						GatewayIntentBits.AutoModerationExecution,
					],
				},
			}),
		}),
	],
})

export class AppModule {}
