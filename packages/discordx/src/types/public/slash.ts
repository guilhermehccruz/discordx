/*
 * -------------------------------------------------------------------------------------------------------
 * Copyright (c) Vijay Meena <vijayymmeena@gmail.com> (https://github.com/samarmeena). All rights reserved.
 * Licensed under the Apache License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------------------
 */
import type {
  ApplicationCommandOptionData,
  ApplicationCommandOptionType,
  ApplicationCommandType,
  ApplicationIntegrationType,
  AutocompleteInteraction,
  ChannelType,
  InteractionContextType,
  LocalizationMap,
  PermissionResolvable,
} from "discord.js";

import type { DApplicationCommand, IGuild } from "../../index.js";

export interface ApplicationCommandOptions<
  T extends string,
  TD extends string,
> {
  botIds?: string[];
  contexts?: InteractionContextType[];
  defaultMemberPermissions?: PermissionResolvable;
  description: TD;
  descriptionLocalizations?: LocalizationMap;
  dmPermission?: boolean;
  guilds?: IGuild[];
  integrationTypes?: ApplicationIntegrationType[];
  name?: T;
  nameLocalizations?: LocalizationMap;
  nsfw?: boolean;
}

export interface SlashOptionBaseOptions<T extends string, TD extends string> {
  autocomplete?: undefined;
  channelTypes?: undefined;
  description: TD;
  descriptionLocalizations?: LocalizationMap;
  maxLength?: undefined;
  maxValue?: undefined;
  minLength?: undefined;
  minValue?: undefined;
  name: T;
  nameLocalizations?: LocalizationMap;
  nsfw?: boolean;
  required?: boolean;
  type: Exclude<
    ApplicationCommandOptionType,
    | ApplicationCommandOptionType.Subcommand
    | ApplicationCommandOptionType.SubcommandGroup
    | ApplicationCommandOptionType.Channel
  >;
}

export type SlashOptionChannelOptions<
  T extends string,
  TD extends string,
> = Omit<SlashOptionBaseOptions<T, TD>, "channelTypes" | "type"> & {
  channelTypes?: ChannelType[];
  type: ApplicationCommandOptionType.Channel;
};

export type SlashOptionAutoCompleteOptions<
  T extends string,
  TD extends string,
> = Omit<SlashOptionBaseOptions<T, TD>, "autocomplete" | "type"> & {
  autocomplete?: SlashAutoCompleteOption;
  type:
    | ApplicationCommandOptionType.String
    | ApplicationCommandOptionType.Number
    | ApplicationCommandOptionType.Integer;
};

export type SlashOptionNumberOptions<
  T extends string,
  TD extends string,
> = Omit<
  SlashOptionBaseOptions<T, TD>,
  "maxValue" | "minValue" | "autocomplete" | "type"
> & {
  autocomplete?: SlashAutoCompleteOption;
  maxValue?: number;
  minValue?: number;
  type:
    | ApplicationCommandOptionType.Number
    | ApplicationCommandOptionType.Integer;
};

export type SlashOptionStringOptions<
  T extends string,
  TD extends string,
> = Omit<
  SlashOptionBaseOptions<T, TD>,
  "maxLength" | "minLength" | "autocomplete" | "type"
> & {
  autocomplete?: SlashAutoCompleteOption;
  maxLength?: number;
  minLength?: number;
  type: ApplicationCommandOptionType.String;
};

export type SlashOptionOptions<T extends string, TD extends string> =
  | SlashOptionBaseOptions<T, TD>
  | SlashOptionChannelOptions<T, TD>
  | SlashOptionNumberOptions<T, TD>
  | SlashOptionStringOptions<T, TD>
  | SlashOptionAutoCompleteOptions<T, TD>;

export type SlashAutoCompleteOption =
  | undefined
  | boolean
  | ((
      interaction: AutocompleteInteraction,
      command: DApplicationCommand,
    ) => void | Promise<void>);

export interface ApplicationCommandDataEx {
  contexts: InteractionContextType[] | null;
  defaultMemberPermissions?: PermissionResolvable | string | null;
  description?: string;
  descriptionLocalizations?: LocalizationMap | null;
  dmPermission?: boolean;
  integrationTypes: ApplicationIntegrationType[];
  name: string;
  nameLocalizations?: LocalizationMap | null;
  nsfw?: boolean;
  options: ApplicationCommandOptionData[];
  type: ApplicationCommandType;
}

export interface ApplicationCommandOptionChoiceDataEx {
  name: string;
  nameLocalizations?: LocalizationMap | null;
  value: string | number;
}

/**
 * Slash group options
 */

export interface SlashGroupBase<T extends string, TD extends string> {
  description: TD;
  descriptionLocalizations?: LocalizationMap;
  name: T;
  nameLocalizations?: LocalizationMap;
}

export type SlashGroupRoot<
  T extends string,
  TD extends string,
> = SlashGroupBase<T, TD> & {
  contexts?: InteractionContextType[];
  defaultMemberPermissions?: PermissionResolvable;
  dmPermission?: boolean;
  integrationTypes?: ApplicationIntegrationType[];
  root?: undefined;
};

export type SlashGroupSubRoot<
  T extends string,
  TD extends string,
  TR extends string,
> = SlashGroupBase<T, TD> & {
  contexts?: undefined;
  defaultMemberPermissions?: undefined;
  dmPermission?: undefined;
  integrationTypes?: undefined;
  root?: TR;
};

export type SlashGroupOptions<
  T extends string,
  TD extends string,
  TR extends string,
> = SlashGroupRoot<T, TD> | SlashGroupSubRoot<T, TD, TR>;
