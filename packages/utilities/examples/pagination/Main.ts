import "reflect-metadata";
import { Client } from "discordx";
import { Intents } from "discord.js";

export class Main {
  private static _client: Client;

  static get Client(): Client {
    return this._client;
  }

  static async start(): Promise<void> {
    this._client = new Client({
      classes: [
        // glob string to load the classes. If you compile your bot, the file extension will be .js
        `${__dirname}/discords/*.{js,ts}`,
      ],
      intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
      botGuilds: [process.env.GUILD_ID ?? "874802018361950248"],
      requiredByDefault: true,
    });

    // In the login method, you must specify the glob string to load your classes (for the framework).
    // In this case that's not necessary because the entry point of your application is this file.
    await this._client.login(process.env.BOT_TOKEN ?? "");

    this._client.once("ready", async () => {
      await this._client.initApplicationCommands();

      console.log("Bot started");
    });

    this._client.on("interactionCreate", (interaction) => {
      if (interaction.isButton() || interaction.isSelectMenu()) {
        // do not execute interaction, if it's pagination (avoid warning: selectmenu/button interaction not found)
        if (interaction.customId.startsWith("discordx@pagination@")) return;
      }
      this._client.executeInteraction(interaction);
    });
  }
}

Main.start();
