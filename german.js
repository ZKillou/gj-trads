module.exports = {
 NOT_TRANSLATE: "Entschuldigung, dies ist noch nicht in **DEUTSCH** übersetzt.",
 NO_ARGS: (usage) => {
  let args = "**Wir brauchen Argumente für diesen Befehl!**"
  if(usage) args += `\n**Hier erfahren Sie, wie Sie den Befehl verwenden: \`${usage}\`**`
  return args
 },
 MISSING_PERMISSIONS: (perm) => let answer = `**<:CheckNo:719807585015824414> | Sie haben keine \`${perm}\`-Berechtigung, um diesen Befehl zu verwenden.**`,
 COOLDOWN: (time, cmd) => let answer = `**🕑 Bitte warten Sie ${time} Sekunden, bevor Sie den Befehl \`${cmd}\` erneut verwenden.**`,
 MONEY_ADD: (amt) => let answer = `**sie haben gerade ${amt} <:NewGoldus:725023149741047829> gesammelt**`,
 ACTION_FAILED: (amount, verb) => let answer = `Ihnen fehlen dafür **${amount} <:NewGoldus:725023149741047829>**!`,
 HELP: {
  CMD_LIST: (nb) => let answer = `<:Help:728617506964635659> | Liste der Bestellungen • ${nb} Bestellungen`,
  CMD_RAPPEL: "<a:notif:719806925788676157> | **Erinnerung:** Die Argumente zwischen `<>` sind obligatorisch, die Argumente zwischen `[]` sind optional.",
 },
 PING: {
  API: "<a:DiscordFr_SpinDiscord:724945863214104577> | API-Latenz :",
  ROBOT: "<:DiscordFr_Bot:724946149299191818> | Roboterlatenz : ",
  MSG: "<a:DiscordFr_Typing:724946684563554385> | Nachrichtenlatenz :",
  QUALITE: "<a:DiscordFr_BlueLoading:724947426477080647> | Qualität der Roboterlatenz :"
 },
 BAL: {
  MONEY_OF: (usertag) => let answer = `${usertag}s Geld`,
  DISPLAY_MONEY: (pocket, bank, bankMax, global) => let answer = `**<:NewGoldus:725023149741047829> | Bargeld : ${pocket} <:NewGoldus:725023149741047829>\n<:CarteBancaire:725023239319060643> | Geld auf der Bank : ${bank} / ${bankMax}\n\n🌐 | Globales Geld : ${global} <:NewGoldus:725023149741047829>**`
 },
 DEPOSIT: (amt) => let answer = `Sie haben Ihrem Bankkonto erfolgreich **${amt} <:NewGoldus:725023149741047829>** gutgeschrieben!`,
 PAY: (amt) => let answer = ` gave **${amt} <:NewGoldus:725023149741047829>** to `, // Ping au début et à la fin
 SHOP: {
  BANK: {
   MENU: (name, price, cmd) => let answer = `**Name: ${name}\nPreis: ${price} <:NewGoldus:725023149741047829>\n${cmd}**\n`
  },
  BUY: (item) => let answer = `Sie haben **${name}** erfolgreich gekauft!`
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
 },
 CONFIG: {
  TITLE: "Quel configuration voulez-vous modifier ?",
  CHOOSEN_LANGUAGE: "Vous avez choisi la langue **FRANÇAIS** avec succès !",
  SELECT_PREFIX: "Envoyez un message qui contient le prefix choisi",
  SET_PREFIX: (prefix) => let answer = `Vous avez choisi le prefix **\`${prefix\`** avec succès !`
 }
}
