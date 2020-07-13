module.exports = {
 NOT_TRANSLATE: "Sorry, this is not translate in **ENGLISH**.",
 NO_ARGS: (usage) => {
  let args = "**We need arguments to execute this command !**"
  if(usage) args += `\n**Here's how to use this command: \`${usage}\`**`
  return args
 },
 MISSING_PERMISSIONS: (perm) => let answer = `**<:CheckNo:719807585015824414> | You don't have the permission \`${perm}\` to use this command.**`,
 COOLDOWN: (time, cmd) => let answer = `**🕑 Please wait ${time} second(s) before using the command \`${cmd}\`.**`,
 MONEY_ADD: (amt) => let answer = `**you just get ${amt} <:NewGoldus:725023149741047829>**`,
 ACTION_FAILED: (amount, verb) => let answer = `You need **${amount} <:NewGoldus:725023149741047829>** to do this !`,
 HELP: {
  CMD_LIST: (nb) => let answer = `<:Help:728617506964635659> | List of commands • ${nb} commands`,
  CMD_RAPPEL: "<a:notif:719806925788676157> | **Reminder :** Arguments beetween `<>` are obligatory and arguments between `[]` are optional.",
 },
 PING: {
  API: "<a:DiscordFr_SpinDiscord:724945863214104577> | Latency of the API :",
  ROBOT: "<:DiscordFr_Bot:724946149299191818> | Latency of the robot : ",
  MSG: "<a:DiscordFr_Typing:724946684563554385> | Latency of the message :",
  QUALITE: "<a:DiscordFr_BlueLoading:724947426477080647> | Quality of the latency of the robot :"
 },
 BAL: {
  MONEY_OF: (usertag) => let answer = `Argent de ${usertag}`,
  DISPLAY_MONEY: (pocket, bank, bankMax, global) => let answer = `**<:NewGoldus:725023149741047829> | Liquide : ${pocket} <:NewGoldus:725023149741047829>\n<:CarteBancaire:725023239319060643> | Argent en banque : ${bank} / ${bankMax}\n\n🌐 | Argent global : ${global} <:NewGoldus:725023149741047829>**`
 },
 DEPOSIT: (amt) => let answer = `Vous avez ajouté **${amt} <:NewGoldus:725023149741047829>** à votre compte en banque avec succès !`,
 PAY: (amt) => let answer = ` a donné **${amt} <:NewGoldus:725023149741047829>** à `, // Ping au début et à la fin
 SHOP: {
  BANK: {
   MENU: (name, price, cmd) => let answer = `**Nom: ${name}\nPrix: ${price} <:NewGoldus:725023149741047829>\n${cmd}**\n`
  },
  BUY: (item) => let answer = `Vous avez acheté **${name}** avec succès !`
 },
 WITHDRAW: (amt) => let answer = `Vous avez retiré **${amt} <:NewGoldus:725023149741047829>** de votre compte en banque avec succès !`,
 CRIME: {
  SUCCES: (amt) => let answer = `**:gem: Vous venez de dévaliser une banque, vous obtenez ${amt} <:NewGoldus:725023149741047829>**`,
  SUCCES_AUTHOR: (usertag) => let answer = `Butin de ${usertag}`,
  FAILED: (amt) => let answer = `**:police_officer: Vous sortez d'un cambriolage mais la police vous retrouve, vous devez payer ${amt} <:NewGoldus:725023149741047829>**`,
  FAILED_AUTHOR: (usertag) => let answer = `Amende de ${usertag}`
 },
 WORK: {
  DESC: (amt) => let answer = `**:hammer: En récompense de votre travail acharné. Vous êtes payés ${amt} <:NewGoldus:725023149741047829>**`,
  AUTHOR: (usertag) => let answer = `Paye de ${usertag}`
 },
 RANK: {
  AUTHOR: (usertag) => let answer = `Expérience de ${usertag}`,
  DESC: "<:DiscordFr_Potion:725019354214695032> | Expérience totale :",
  LVL_NAME: "<a:DiscordFr_StarGif:725019476264747086> | Niveau :",
  RANK_NAME: "<:4eme:726816527914893402> | Rang :",
  PROGRESS_NAME: "<:DiscordFr_ThisUp:725019995318517780> | Progression :",
 },
 MODULE: {
  ENABLE: (name) => let answer = `**<:CheckYes:719807502966849627> | Le module \`${name}\` vient d'être activé avec succès !**`,
  ALREADY_ENABLE: (name) => let answer = `**<:CheckNo:719807585015824414> | Le module \`${name}\` est déjà activé sur le serveur.**`,
  DISABLE: (name) => let answer = `**<:CheckYes:719807502966849627> | Le module \`${name}\` vient d'être désactivé avec succès !**`,
  ALREADY_DISABLE: (name) => let answer = `**<:CheckNo:719807585015824414> | Le module \`${name}\` est déjà désactivé sur le serveur.**`
 },
 LEADERBOARD: {
  LIST: "**<:Help:728617506964635659> | Liste des leaderboards :\n\n<:DiscordFr_Potion:725019354214695032> | g!leaderboard rank\nAffiche le leaderboard des niveaux\n<:NewGoldus:725023149741047829> | g!leaderboard money\nAffiche le leaderboard de l'argent\n🌐 | g!leaderboard gmoney\nAffiche le leaderboard de l'argent global**",
  POS: "<:DiscordFr_Potion:725019354214695032> | Position :",
  RANK_AUTHOR: (name) => let answer = `Top 10 des niveaux de ${name}`,
  MONEY_AUTHOR: (name) => let answer = `Top 10 des riches de ${name}`,
  GMONEY_AUTHOR: "Top 10 des riches globaux"
 }
}
