module.exports = {
 NOT_TRANSLATE: "Désolé, ceci n'est pas encore traduit en **FRANÇAIS**.",
 NO_ARGS: (usage) => {
  let args = "**Il nous faut des arguments pour cette commande !**"
  if(usage) args += `\n**Voici comment utiliser la commande: \`${usage}\`**`
  return args
 },
 MISSING_PERMISSIONS: (perm) => let answer = `**<:CheckNo:719807585015824414> | Vous n'avez pas la permission \`${perm}\` pour utiliser cette commande.**`,
 COOLDOWN: (time, cmd) => let answer = `**🕑 Merci d'attendre ${time} seconde(s) avant de ré-utiliser la commande \`${cmd}\`.**`,
 MONEY_ADD: (amt) => let answer = `**vous venez de récolter ${amt} <:NewGoldus:725023149741047829>**`,
 ACTION_FAILED: (amount, verb) => let answer = `Il vous manque **${amount} <:NewGoldus:725023149741047829>** pour ${verb} ceci !`,
 HELP: {
  CMD_LIST: (nb) => let answer = `<:Help:728617506964635659> | Liste des commandes • ${nb} commandes`,
  CMD_RAPPEL: "<a:notif:719806925788676157> | **Rappel :** Les arguments entre `<>` sont obligatoires, les arguments entre `[]` sont facultatifs.",
 },
 PING: {
  API: "<a:DiscordFr_SpinDiscord:724945863214104577> | Latence de l'API :",
  ROBOT: "<:DiscordFr_Bot:724946149299191818> | Latence du robot : ",
  MSG: "<a:DiscordFr_Typing:724946684563554385> | Latence du message :",
  QUALITE: "<a:DiscordFr_BlueLoading:724947426477080647> | Qualité de la latence du robot :"
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
  SUCCES: (amt) => let answer = `**:gem: Vous venez de dévaliser une banque, vous obtenez **${amt} <:NewGoldus:725023149741047829>**`,
  SUCCES_AUTHOR: (usertag) => let answer = `Butin de ${usertag}`,
  FAILED: (amt) => let answer = `**:police_officer: Vous sortez d'un cambriolage mais la police vous retrouve, vous devez payer **${amt} <:NewGoldus:725023149741047829>**`,
  FAILED_AUTHOR: (usertag) => let answer = `Amende de ${usertag}`
 },
 WORK: {
  DESC: (amt) => let answer = `**:hammer: En récompense de votre travail acharné. Vous êtes payés **${amt} <:NewGoldus:725023149741047829>**`,
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
  TITLE: "Quelle configuration voulez-vous modifier ?",
  CHOOSEN_LANGUAGE: "Vous avez choisi la langue **FRANÇAIS** avec succès !",
  SELECT_PREFIX: "Envoyez un message qui contient le prefix choisi",
  SET_PREFIX: (prefix) => let answer = `Vous avez choisi le prefix **\`${prefix\`** avec succès !`
 }
}
