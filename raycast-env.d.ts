/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Rime User Data Directory - Leave empty to detect the Rime user data directory automatically */
  "rimeUserDirectory"?: string,
  /** Backup Location - Leave empty to store backups under .raycast-rime-manager/backups in the user data directory */
  "backupDirectory"?: string,
  /** Deploy After Changes - Deploy Rime automatically after changing candidate or per-app settings */
  "reloadAfterChanges": boolean
}
/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `manage-rime` command */
  export type ManageRime = ExtensionPreferences & {}
  /** Preferences accessible in the `pin-candidates` command */
  export type PinCandidates = ExtensionPreferences & {}
  /** Preferences accessible in the `remove-candidates` command */
  export type RemoveCandidates = ExtensionPreferences & {}
  /** Preferences accessible in the `application-modes` command */
  export type ApplicationModes = ExtensionPreferences & {}
  /** Preferences accessible in the `reload-rime` command */
  export type ReloadRime = ExtensionPreferences & {}
  /** Preferences accessible in the `sync-rime` command */
  export type SyncRime = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `manage-rime` command */
  export type ManageRime = {}
  /** Arguments passed to the `pin-candidates` command */
  export type PinCandidates = {}
  /** Arguments passed to the `remove-candidates` command */
  export type RemoveCandidates = {}
  /** Arguments passed to the `application-modes` command */
  export type ApplicationModes = {}
  /** Arguments passed to the `reload-rime` command */
  export type ReloadRime = {}
  /** Arguments passed to the `sync-rime` command */
  export type SyncRime = {}
}
