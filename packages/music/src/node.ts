/*
 * -------------------------------------------------------------------------------------------------------
 * Copyright (c) Vijay Meena <vijayymmeena@gmail.com> (https://github.com/samarmeena). All rights reserved.
 * Licensed under the Apache License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------------------
 */
/* eslint-disable @typescript-eslint/no-unsafe-declaration-merging */
import { dirname, isESM } from "@discordx/importer";
import type { Client } from "discord.js";
import { EventEmitter } from "events";
import { Worker } from "worker_threads";

import type {
  GuildData,
  JoinData,
  ParentProcessDataPayload,
  PlayData,
  QueueEventPayloads,
  SetVolumeData,
  WorkerDataPayload,
} from "./types/index.js";
import {
  ParentProcessEvent,
  QueueEvent,
  WorkerOperation,
} from "./types/index.js";

export interface Node extends EventEmitter {
  on<T extends QueueEvent>(
    event: T,
    listener: (payload: QueueEventPayloads[T]) => void,
  ): this;
}

export class Node extends EventEmitter {
  private worker: Worker;

  constructor(public client: Client) {
    super();

    const folder = isESM() ? dirname(import.meta.url) : __dirname;
    this.worker = new Worker(
      `${folder}/worker/${isESM() ? "index.mjs" : "index.js"}`,
    );

    this.setupEventListeners();
    this.setupWorkerMessageHandler();
  }

  private sendOp(payload: WorkerDataPayload): void {
    this.worker.postMessage(payload);
  }

  private setupEventListeners(): void {
    this.client.on("raw", (event: any) => {
      if (event.t === "VOICE_STATE_UPDATE") {
        this.sendOp({ data: event.d, op: WorkerOperation.OnVoiceStateUpdate });
      } else if (event.t === "VOICE_SERVER_UPDATE") {
        this.sendOp({
          data: event.d,
          op: WorkerOperation.OnVoiceServerUpdate,
        });
      }
    });
  }

  private setupWorkerMessageHandler(): void {
    this.worker.on("message", (payload: ParentProcessDataPayload) => {
      this.emit(QueueEvent.ParentProcessEvent, payload);

      switch (payload.op) {
        case ParentProcessEvent.VoiceStateUpdate:
          void this.handleWorkerVoiceStateUpdate(payload.data);
          break;

        case ParentProcessEvent.ConnectionDestroy:
          this.handleWorkerConnectionDestroy(payload.data);
          break;

        default:
          break;
      }
    });
  }

  private async handleWorkerVoiceStateUpdate(data: any): Promise<void> {
    const guild = await this.client.guilds.fetch(data.guildId);
    guild.shard.send(data.payload);
  }

  private handleWorkerConnectionDestroy(data: {
    channelId: string;
    guildId: string;
  }): void {
    const { channelId } = data;
    this.client.voice.adapters.get(channelId)?.destroy();
  }

  join(data: JoinData): void {
    this.sendOp({ data, op: WorkerOperation.Join });
  }

  play(data: PlayData): void {
    this.sendOp({ data, op: WorkerOperation.Play });
  }

  pingPlaybackInfo(data: GuildData): void {
    this.sendOp({ data, op: WorkerOperation.PingPlaybackInfo });
  }

  setVolume(data: SetVolumeData): void {
    this.sendOp({ data, op: WorkerOperation.SetVolume });
  }

  pause(data: GuildData): void {
    this.sendOp({ data, op: WorkerOperation.Pause });
  }

  resume(data: GuildData): void {
    this.sendOp({ data, op: WorkerOperation.Resume });
  }

  stop(data: GuildData): void {
    this.sendOp({ data, op: WorkerOperation.Stop });
  }

  disconnect(data: GuildData): void {
    this.sendOp({ data, op: WorkerOperation.Disconnect });
  }

  disconnectAll(): void {
    this.sendOp({ op: WorkerOperation.DisconnectAll });
  }
}
