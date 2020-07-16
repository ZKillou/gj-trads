module.exports = {
 NOT_TRANSLATE: "Entschuldigung, dies ist noch nicht in **DEUTSCH** übersetzt.",
 NO_ARGS: (usage) => {
  let args = "**Wir brauchen Argumente für diesen Befehl!**"
  if(usage) args += `\n**Hier erfahren Sie, wie Sie den Befehl verwenden: \`${usage}\`**`
  return args
 },
 MISSING_PERMISSIONS: (perm) => `**<:CheckNo:719807585015824414> | Sie haben keine \`${perm}\`-Berechtigung, um diesen Befehl zu verwenden.**`,
 COOLDOWN: (time, cmd) => `**🕑 Bitte warten Sie ${time} Sekunden, bevor Sie den Befehl \`${cmd}\` erneut verwenden.**`,
 MONEY_ADD: (amt) => `**sie haben gerade ${amt} <:NewGoldus:725023149741047829> gesammelt**`,
 ACTION_FAILED: (amount, verb) => `Ihnen fehlen dafür **${amount} <:NewGoldus:725023149741047829>**!`,
 HELP: {
  CMD_LIST: (nb) => `<:Help:728617506964635659> | Liste der Bestellungen • ${nb} Bestellungen`,
  CMD_RAPPEL: "<a:notif:719806925788676157> | **Erinnerung:** Die Argumente zwischen `<>` sind obligatorisch, die Argumente zwischen `[]` sind optional.",
 },
 PING: {
  API: "<a:DiscordFr_SpinDiscord:724945863214104577> | API-Latenz :",
  ROBOT: "<:DiscordFr_Bot:724946149299191818> | Roboterlatenz : ",
  MSG: "<a:DiscordFr_Typing:724946684563554385> | Nachrichtenlatenz :",
  QUALITE: "<a:DiscordFr_BlueLoading:724947426477080647> | Qualität der Roboterlatenz :"
 },
 BAL: {
  MONEY_OF: (usertag) => `${usertag}s Geld`,
  DISPLAY_MONEY: (pocket, bank, bankMax, global) => `**<:NewGoldus:725023149741047829> | Bargeld : ${pocket} <:NewGoldus:725023149741047829>\n<:CarteBancaire:725023239319060643> | Geld auf der Bank : ${bank} / ${bankMax}\n\n🌐 | Globales Geld : ${global} <:NewGoldus:725023149741047829>**`
 },
 DEPOSIT: (amt) => `Sie haben Ihrem Bankkonto erfolgreich **${amt} <:NewGoldus:725023149741047829>** gutgeschrieben!`,
 PAY: (amt) => ` gave **${amt} <:NewGoldus:725023149741047829>** to `, // Ping au début et à la fin
 SHOP: {
  BANK: {
   MENU: (name, price, cmd) => `**Name: ${name}\nPreis: ${price} <:NewGoldus:725023149741047829>\n${cmd}**\n`
  },
  BUY: (item) => `Sie haben **${item}** erfolgreich gekauft!`
 },
 WITHDRAW: (amt) => `Sie haben erfolgreich **${amt} <:NewGoldus:725023149741047829>** von Ihrem Bankkonto abgebucht!`,
 CRIME: {
  SUCCES: (amt) => `**:gem: Sie haben gerade eine Bank ausgeraubt, Sie bekommen ${amt} <:NewGoldus:725023149741047829>**`,
  SUCCES_AUTHOR: (usertag) => `${usertag}s Beute`,
  FAILED: (amt) => `**:police_officer: Sie kommen aus einem Einbruch heraus, aber die Polizei findet Sie, Sie müssen ${amt} <:NewGoldus:725023149741047829>** bezahlen`,
  FAILED_AUTHOR: (usertag) => `${usertag}s Fein`
 },
 WORK: {
  DESC: (amt) => `**:hammer: Als Belohnung für Ihre harte Arbeit. Sie erhalten ${amt} <:NewGoldus:725023149741047829>**`,
  AUTHOR: (usertag) => `${usertag}s Bezahlt`
 },
 RANK: {
  AUTHOR: (usertag) => `${usertag}s Erfahrungspunkt`,
  DESC: "<:DiscordFr_Potion:725019354214695032> | Gesamterfahrungspunkt :",
  LVL_NAME: "<a:DiscordFr_StarGif:725019476264747086> | Niveau :",
  RANK_NAME: "<:4eme:726816527914893402> | Rang :",
  PROGRESS_NAME: "<:DiscordFr_ThisUp:725019995318517780> | Fortschreiten :",
 },
 MODULE: {
  ENABLE: (name) => `**<:CheckYes:719807502966849627> | Das \`${name}\`-Modul wurde gerade erfolgreich aktiviert!**`,
  ALREADY_ENABLE: (name) => `**<:CheckNo:719807585015824414> | Das \`${name}\`-Modul ist bereits auf dem Server aktiviert.**`,
  DISABLE: (name) => `**<:CheckYes:719807502966849627> | Das \`${name}\`-Modul wurde gerade erfolgreich deaktiviert!**`,
  ALREADY_DISABLE: (name) => `**<:CheckNo:719807585015824414> | Das \`${name}\`-Modul ist auf dem Server bereits deaktiviert.**`
 },
 LEADERBOARD: {
  LIST: "**<:Help:728617506964635659> | Rangliste :\n\n<:DiscordFr_Potion:725019354214695032> | g!leaderboard rank\nZeigt die Ebenenklassifizierung an\n<:NewGoldus:725023149741047829> | g!leaderboard money\nZeigt das Geldranking an\n🌐 | g!leaderboard gmoney\nZeigt das gesamte Geldranking an**",
  POS: "<:DiscordFr_Potion:725019354214695032> | Position :",
  RANK_AUTHOR: (name) => `Top 10 Level von ${name}`,
  MONEY_AUTHOR: (name) => `Top 10 reiche Leute von ${name}`,
  GMONEY_AUTHOR: "Top 10 der globalen Reichen"
 },
 CONFIG: {
  TITLE: "Welche Konfiguration möchten Sie ändern?",
  CHOOSEN_LANGUAGE: "Sie haben die **DEUTSCHE** Sprache erfolgreich gewählt!",
  SELECT_PREFIX: "Senden Sie eine Nachricht mit dem ausgewählten Präfix",
  SET_PREFIX: (prefix) => `Sie haben das Präfix **\`${prefix}\`** mit Erfolg !`
 },
 IC: {
  FOOTER: (serv) => `Gesendet von : ${serv}`,
  STATUS: {
   ONLINE: "Online",
   DND: "Störe nicht",
   IDLE: "Leerlauf",
   STREAMING: "Strome",
   OFFLINE: "Offline"
  },
  STATE: {
   STATUS: "Status :",
   PLAYING: "Spielen :",
   LISTENING: "Hören :",
   WATCHING: "Aufpassen :",
   STREAM: "Streaming :"
  }
 },
 MOD: {
  NO_REASON: "Keinen Grund angeben",
  USER_NOT_FOUND: "**<:CheckNo:719807585015824414> Cet utilisateur est introuvable ...**",
  BAN: {
   BANNED: (user, reason) => `**<:CheckYes:719807502966849627> Sie haben ${user} mit folgendem Grund verboten: \`${reason}\` erfolgreich!**`,
   BANNED_DM: (guildname, reason) => `**<:Warning:719808381593976842> Sie wurden vom \`${guildname}\`-Server aus folgendem Grund gesperrt: \`${reason}\`!**`,
   AUDIT_LOGS: (mod, reason) => `Moderator: ${mod} | Grund: ${reason}`,
   I_CANT: "**<:CheckNo:719807585015824414> Ich kann diesen Benutzer nicht sperren!**",
   YOU_CANT: "**<:CheckNo:719807585015824414> Sie können diesen Benutzer nicht sperren!**",
   ALDEADY_BANNED: (user) => `**<:CheckNo:719807585015824414> Der Benutzer ${user} wurde bereits vom Server gesperrt!**`
  },
  UNBAN: {
   UNBANNED: (user, reason) => `**<:CheckYes:719807502966849627> **`,
   UNBANNED_DM: (guildname, reason) => `**<:Warning:719808381593976842> Vous avez été débanni du serveur \`${guildname}\` pour la raison: \`${reason}\` !**`,
   AUDIT_LOGS: (mod, reason) => `Modérateur: ${mod} | Raison: ${reason}`,
   ALDEADY_UNBANNED: (user) => `**<:CheckNo:719807585015824414> L'utilisateur ${user} a déjà été débanni du serveur !**`
  },
  KICK: {
   KICKED: (user, reason) => `**<:CheckYes:719807502966849627> Vous avez viré ${user} avec comme raison: \`${reason}\` avec succès !**`,
   KICKED_DM: (guildname, reason) => `**<:Warning:719808381593976842> Vous avez été viré du serveur \`${guildname}\` pour la raison: \`${reason}\` !**`,
   AUDIT_LOGS: (mod, reason) => `Modérateur: ${mod} | Raison: ${reason}`,
   I_CANT: "**<:CheckNo:719807585015824414> Je ne peux pas virer cet utilisateur !**",
   YOU_CANT: "**<:CheckNo:719807585015824414> Vous ne pouvez pas virer cet utilisateur !**"
  },
  MUTE: {
   MUTED: (user, reason) => `**<:CheckYes:719807502966849627> Vous avez rendu muet ${user} avec comme raison: \`${reason}\` avec succès !**`,
   MUTED_DM: (guildname, reason) => `**<:Warning:719808381593976842> Vous avez été rendu muet du serveur \`${guildname}\` pour la raison: \`${reason}\` !**`,
   AUDIT_LOGS: (mod, reason) => `Modérateur: ${mod} | Raison: ${reason}`,
   I_CANT: "**<:CheckNo:719807585015824414> Je ne peux pas rendre muet cet utilisateur !**",
   YOU_CANT: "**<:CheckNo:719807585015824414> Vous ne pouvez pas rendre muet cet utilisateur !**",
   ROLE_ERROR: "**<:CheckNo:719807585015824414> Le rôle `Muted` a une position superieur à mon rôle le plus haut, je ne peux donc pas rendre muet cet utilisateur. Veuillez rééssayer lorsque vous aurez descendu le rôle `Muted` sous mon rôle le plus haut !**",
   ALDEADY_MUTED: (user) => `**<:CheckNo:719807585015824414> L'utilisateur ${user} a déjà été rendu muet sur le serveur !**`
  },
  UNMUTE: {
   UNMUTED: (user, reason) => `**<:CheckYes:719807502966849627> Vous avez rendu la parole à ${user} avec comme raison: \`${reason}\` avec succès !**`,
   UNMUTED_DM: (guildname, reason) => `**<:Warning:719808381593976842> Vous avez retrouvé la parole sur le serveur \`${guildname}\` pour la raison: \`${reason}\` !**`,
   AUDIT_LOGS: (mod, reason) => `Modérateur: ${mod} | Raison: ${reason}`,
   I_CANT: "**<:CheckNo:719807585015824414> Je ne peux pas rendre la parole à cet utilisateur !**",
   YOU_CANT: "**<:CheckNo:719807585015824414> Vous ne pouvez pas rendre la parole à cet utilisateur !**",
   ROLE_ERROR: "**<:CheckNo:719807585015824414> Le rôle `Muted` a une position superieur à mon rôle le plus haut, je ne peux donc pas rendre la parole à cet utilisateur. Veuillez rééssayer lorsque vous aurez descendu le rôle `Muted` sous mon rôle le plus haut !**",
   ALDEADY_UNMUTED: (user) => `**<:CheckNo:719807585015824414> L'utilisateur ${user} a déjà la parole sur le serveur !**`
  },
  WARN: {
   WARNED: (user, reason) => `**<:CheckYes:719807502966849627> Vous avez donné un avertissement à ${user} avec comme raison: \`${reason}\` avec succès !**`,
   WARNED_DM: (guildname, reason) => `**<:Warning:719808381593976842> Vous avez reçu un avertissement sur le serveur \`${guildname}\` pour la raison: \`${reason}\` !**`,
   I_CANT: "**<:CheckNo:719807585015824414> Je ne peux pas donner un avertissement à cet utilisateur !**",
   YOU_CANT: "**<:CheckNo:719807585015824414> Vous ne pouvez pas donner un avertissement à cet utilisateur !**"
  },
  UNWARN: {
   UNWARNED: (user, reason) => `**<:CheckYes:719807502966849627> Vous avez enlevé un avertissement à ${user} avec comme raison: \`${reason}\` avec succès !**`,
   UNWARNED_DM: (guildname, reason) => `**<:Warning:719808381593976842> Un avertissement vous a été supprimé sur le serveur \`${guildname}\` pour la raison: \`${reason}\` !**`,
   YOU_CANT: "**<:CheckNo:719807585015824414> Vous ne pouvez pas enlever d'avertissement à cet utilisateur !**"
  },
  CLEARWARN: {
   CLEARWARNED: (user, reason) => `**<:CheckYes:719807502966849627> Vous avez supprimé tous les avertissements de ${user} avec comme raison: \`${reason}\` avec succès !**`,
   CLEARWARNED_DM: (guildname, reason) => `**<:Warning:719808381593976842> Tous vos avertissements vous ont été supprimé sur le serveur \`${guildname}\` pour la raison: \`${reason}\` !**`,
   YOU_CANT: "**<:CheckNo:719807585015824414> Vous ne pouvez pas supprimer tous les avertissements de cet utilisateur !**"
  },
  CLEAR: {
   CLEARED: (amt) => `**<:CheckYes:719807502966849627> Vous avez supprimé \`${amt}\` messages avec succès !**`,
   AUDIT_LOGS: (mod, reason) => `Modérateur: ${mod}`
  },
 }
}
