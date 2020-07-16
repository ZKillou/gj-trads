module.exports = {
 NOT_TRANSLATE: "Lo sentimos, esto aún no está traducido al **ESPAÑOL**.",
 NO_ARGS: (usage) => {
  let args = "**¡ Necesitamos argumentos para esta orden !**"
  if(usage) args += `\n**Voici comment utiliser la commande: \`${usage}\`**`
  return args
 },
 MISSING_PERMISSIONS: (perm) => `**<:CheckNo:719807585015824414> | Vous n'avez pas la permission \`${perm}\` pour utiliser cette commande.**`,
 COOLDOWN: (time, cmd) => `**🕑 Merci d'attendre ${time} seconde(s) avant de ré-utiliser la commande \`${cmd}\`.**`,
 MONEY_ADD: (amt) => `**vous venez de récolter ${amt} <:NewGoldus:725023149741047829>**`,
 ACTION_FAILED: (amount, verb) => `Il vous manque **${amount} <:NewGoldus:725023149741047829>** pour ${verb} ceci !`,
 HELP: {
  CMD_LIST: (nb) => `<:Help:728617506964635659> | Liste des commandes • ${nb} commandes`,
  CMD_RAPPEL: "<a:notif:719806925788676157> | **Rappel :** Les arguments entre `<>` sont obligatoires, les arguments entre `[]` sont facultatifs.",
 },
 PING: {
  API: "<a:DiscordFr_SpinDiscord:724945863214104577> | Latence de l'API :",
  ROBOT: "<:DiscordFr_Bot:724946149299191818> | Latence du robot : ",
  MSG: "<a:DiscordFr_Typing:724946684563554385> | Latence du message :",
  QUALITE: "<a:DiscordFr_BlueLoading:724947426477080647> | Qualité de la latence du robot :"
 },
 BAL: {
  MONEY_OF: (usertag) => `Argent de ${usertag}`,
  DISPLAY_MONEY: (pocket, bank, bankMax, global) => `**<:NewGoldus:725023149741047829> | Liquide : ${pocket} <:NewGoldus:725023149741047829>\n<:CarteBancaire:725023239319060643> | Argent en banque : ${bank} / ${bankMax}\n\n🌐 | Argent global : ${global} <:NewGoldus:725023149741047829>**`
 },
 DEPOSIT: (amt) => `Vous avez ajouté **${amt} <:NewGoldus:725023149741047829>** à votre compte en banque avec succès !`,
 PAY: (amt) => ` a donné **${amt} <:NewGoldus:725023149741047829>** à `, // Ping au début et à la fin
 SHOP: {
  BANK: {
   MENU: (name, price, cmd) => `**Nom: ${name}\nPrix: ${price} <:NewGoldus:725023149741047829>\n${cmd}**\n`
  },
  BUY: (item) => `Vous avez acheté **${item}** avec succès !`
 },
 WITHDRAW: (amt) => `Vous avez retiré **${amt} <:NewGoldus:725023149741047829>** de votre compte en banque avec succès !`,
 CRIME: {
  SUCCES: (amt) => `**:gem: Vous venez de dévaliser une banque, vous obtenez **${amt} <:NewGoldus:725023149741047829>**`,
  SUCCES_AUTHOR: (usertag) => `Butin de ${usertag}`,
  FAILED: (amt) => `**:police_officer: Vous sortez d'un cambriolage mais la police vous retrouve, vous devez payer **${amt} <:NewGoldus:725023149741047829>**`,
  FAILED_AUTHOR: (usertag) => `Amende de ${usertag}`
 },
 WORK: {
  DESC: (amt) => `**:hammer: En récompense de votre travail acharné. Vous êtes payés **${amt} <:NewGoldus:725023149741047829>**`,
  AUTHOR: (usertag) => `Paye de ${usertag}`
 },
 RANK: {
  AUTHOR: (usertag) => `Expérience de ${usertag}`,
  DESC: "<:DiscordFr_Potion:725019354214695032> | Expérience totale :",
  LVL_NAME: "<a:DiscordFr_StarGif:725019476264747086> | Niveau :",
  RANK_NAME: "<:4eme:726816527914893402> | Rang :",
  PROGRESS_NAME: "<:DiscordFr_ThisUp:725019995318517780> | Progression :",
 },
 MODULE: {
  ENABLE: (name) => `**<:CheckYes:719807502966849627> | Le module \`${name}\` vient d'être activé avec succès !**`,
  ALREADY_ENABLE: (name) => `**<:CheckNo:719807585015824414> | Le module \`${name}\` est déjà activé sur le serveur.**`,
  DISABLE: (name) => `**<:CheckYes:719807502966849627> | Le module \`${name}\` vient d'être désactivé avec succès !**`,
  ALREADY_DISABLE: (name) => `**<:CheckNo:719807585015824414> | Le module \`${name}\` est déjà désactivé sur le serveur.**`
 },
 LEADERBOARD: {
  LIST: "**<:Help:728617506964635659> | Liste des leaderboards :\n\n<:DiscordFr_Potion:725019354214695032> | g!leaderboard rank\nAffiche le leaderboard des niveaux\n<:NewGoldus:725023149741047829> | g!leaderboard money\nAffiche le leaderboard de l'argent\n🌐 | g!leaderboard gmoney\nAffiche le leaderboard de l'argent global**",
  POS: "<:DiscordFr_Potion:725019354214695032> | Position :",
  RANK_AUTHOR: (name) => `Top 10 des niveaux de ${name}`,
  MONEY_AUTHOR: (name) => `Top 10 des riches de ${name}`,
  GMONEY_AUTHOR: "Top 10 des riches globaux"
 },
 CONFIG: {
  TITLE: "Quelle configuration voulez-vous modifier ?",
  CHOOSEN_LANGUAGE: "¡ Ha elegido el idioma **SPANISH** con éxito !",
  SELECT_PREFIX: "Envíe un mensaje que contenga el prefijo elegido.",
  SET_PREFIX: (prefix) => `¡ Usted ha elegido el prefijo con éxito **\`${prefix}\` !**`
 },
 IC: {
  FOOTER: (serv) => `Enviado desde : ${serv}`,
  STATUS: {
   ONLINE: "En línea",
   DND: "No molestar",
   IDLE: "Inactivo",
   STREAMING: "Corriente",
   OFFLINE: "Sin conexión"
  },
  STATE: {
   STATUS: "Estado :",
   PLAYING: "Jugar :",
   LISTENING: "Escuchar :",
   WATCHING: "Ver :",
   STREAM: "Corriente :"
  }
 },
 MOD: {
  NO_REASON: "Aucune raison spécifiée",
  USER_NOT_FOUND: "**<:CheckNo:719807585015824414> Cet utilisateur est introuvable ...**",
  BAN: {
   BANNED: (user, reason) => `**<:CheckYes:719807502966849627> Vous avez banni ${user} avec comme raison: \`${reason}\` avec succès !**`,
   BANNED_DM: (guildname, reason) => `**<:Warning:719808381593976842> Vous avez été banni du serveur \`${guildname}\` pour la raison: \`${reason}\` !**`,
   AUDIT_LOGS: (mod, reason) => `Modérateur: ${mod} | Raison: ${reason}`,
   I_CANT: "**<:CheckNo:719807585015824414> Je ne peux pas bannir cet utilisateur !**",
   YOU_CANT: "**<:CheckNo:719807585015824414> Vous ne pouvez pas bannir cet utilisateur !**",
   ALREADY_BANNED: (user) => `**<:CheckNo:719807585015824414> L'utilisateur ${user} a déjà été banni du serveur !**`
  },
  UNBAN: {
   UNBANNED: (user, reason) => `**<:CheckYes:719807502966849627> Vous avez débanni ${user} avec comme raison: \`${reason}\` avec succès !**`,
   UNBANNED_DM: (guildname, reason) => `**<:Warning:719808381593976842> Vous avez été débanni du serveur \`${guildname}\` pour la raison: \`${reason}\` !**`,
   AUDIT_LOGS: (mod, reason) => `Modérateur: ${mod} | Raison: ${reason}`,
   ALREADY_UNBANNED: (user) => `**<:CheckNo:719807585015824414> L'utilisateur ${user} a déjà été débanni du serveur !**`
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
   ALREADY_MUTED: (user) => `**<:CheckNo:719807585015824414> L'utilisateur ${user} a déjà été rendu muet sur le serveur !**`
  },
  UNMUTE: {
   UNMUTED: (user, reason) => `**<:CheckYes:719807502966849627> Vous avez rendu la parole à ${user} avec comme raison: \`${reason}\` avec succès !**`,
   UNMUTED_DM: (guildname, reason) => `**<:Warning:719808381593976842> Vous avez retrouvé la parole sur le serveur \`${guildname}\` pour la raison: \`${reason}\` !**`,
   AUDIT_LOGS: (mod, reason) => `Modérateur: ${mod} | Raison: ${reason}`,
   I_CANT: "**<:CheckNo:719807585015824414> Je ne peux pas rendre la parole à cet utilisateur !**",
   YOU_CANT: "**<:CheckNo:719807585015824414> Vous ne pouvez pas rendre la parole à cet utilisateur !**",
   ROLE_ERROR: "**<:CheckNo:719807585015824414> Le rôle `Muted` a une position superieur à mon rôle le plus haut, je ne peux donc pas rendre la parole à cet utilisateur. Veuillez rééssayer lorsque vous aurez descendu le rôle `Muted` sous mon rôle le plus haut !**",
   ALREADY_UNMUTED: (user) => `**<:CheckNo:719807585015824414> L'utilisateur ${user} a déjà la parole sur le serveur !**`
  },
  WARN: {
   WARNED: (user, reason) => `**<:CheckYes:719807502966849627> Vous avez donné un avertissement à ${user} avec comme raison: \`${reason}\` avec succès !**`,
   WARNED_DM: (guildname, reason) => `**<:Warning:719808381593976842> Vous avez reçu un avertissement sur le serveur \`${guildname}\` pour la raison: \`${reason}\` !**`,
   I_CANT: "**<:CheckNo:719807585015824414> Je ne peux pas donner un avertissement à cet utilisateur !**",
   YOU_CANT: "**<:CheckNo:719807585015824414> Vous ne pouvez pas donner un avertissement à cet utilisateur !**"
  },
  WARNS: {
   TITLE: (user) => `Liste des warns de ${user}`
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
