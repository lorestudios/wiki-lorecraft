---
title: Commands
---

# Commands List <Badge type="tip" text="More command coming!" />

Lorecraft has a wide range of commands available to players and builders. All commands are started with the forward slash symbol `/<command>`, sometimes it is a double foward slash `//<command`.

## Teleporting Commands

| NAME                 |           COMMNAND            | DESCRIPTION                            |
| -------------------- | :---------------------------: | :------------------------------------- |
| **Teleport**         |  <cc>`/tp <x> <y> <z>`</cc>   | Teleport to the xyz coordinates stated |
| **Teleport Request** | <cc>`/tpr <player name>`</cc> | Request to teleport to player          |
| **Teleport Here**    | <cc>`/tph <player name>`</cc> | Request for player to teleport to you  |
| **Teleport Accept**  |        <cc>`/tpa`</cc>        | Accept Teleport Request/Here           |

## Moving Commands

| NAME        |          COMMNAND          | DESCRIPTION               |
| ----------- | :------------------------: | :------------------------ |
| **Speed**   | <cc>`/speed <1 - 10>`</cc> | Adjust walk and fly speed |
| **No Clip** |       <cc>`/nc`</cc>       | Fly through blocks        |

<!-- ## Navigation Commands

| NAME                 |          COMMNAND          | DESCRIPTION                            |
| -------------------- | :------------------------: | :------------------------------------- |
| **Telebort**         | <cc>`/tb <x> <y> <z>`</cc> | Telebort to the xyz coordinates stated |
| **Telebort Request** |    `/tbr <player name>`    | Request to telebort to player          |
| **Telebort Here**    |    `/tbh <player name>`    | Request for player to telebort to you  |
| **Telebort Accept**  |           `/tba`           | Accept Telebort Request/Here           | -->

## Selection Commands

| NAME                  | COMMNAND          | DESCRIPTION                              |
| --------------------- | ----------------- | :--------------------------------------- |
| **Selection Wand**    | <cc>`/wand`</cc>  | Gives you a selection wand (Wooden Axe)  |
| **Farwand**           | `/farwand`        | Allows wand to select from a distance    |
| **Position Select 1** | `//1` or `//pos1` | Selects first position of a cuboid area  |
| **Position Select 2** | `//2` or `//pos2` | Selects second position of a cuboid area |
| **Clear Selection**   | `//none`          | Clears the current selection             |

## Clipboard Commands

| NAME         | COMMNAND                    | DESCRIPTION                                     |
| ------------ | --------------------------- | :---------------------------------------------- |
| **Copy**     | `//copy [-b] [-m] [-e]`     | Copy to clipboard                               |
|              | `-b`                        | copy biome                                      |
|              | `-m`                        | copy mask - no air                              |
|              | `-e`                        | copy entities                                   |
| **Lazycopy** | `//lazycopy [-b] [-m] [-e]` | For copying large selections                    |
| **Paste**    | `//paste [-s] [-a] [-o]`    | Paste clipboard to your position                |
| **Rotate**   | `//rotate <y> [x] [z]`      | Rotates clipboard. eg. `//rotate 90`            |
| **Flip**     | `//flip [direction]`        | Flips clipboard in direction `[left]` `[right]` |
