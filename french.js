module.exports = {
 NOT_TRANSLATE: "Désolé, ceci n'est pas encore traduit en **FRANÇAIS**.",
 NO_ARGS: (usage) => {
  let args = "**Il nous faut des arguments pour cette commande !**"
  if(usage) args += `\n**Voici comment utiliser la commande \`${usage}\``
  return args
 },
 MISSING_PERMISSIONS: (perm) => let answer = `**<:CheckNo:719807585015824414> | Vous n'avez pas la permission \`${perm}\` pour utiliser cette commande.**`,
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
 PAY: (amt) => let answer = `a donné **${amt} <:NewGoldus:725023149741047829>** à`, // Ping au début et à la fin
 SHOP: {
  BANK: {
   MENU: (name, price, cmd) => let answer = `**Nom: ${name}\nPrix: ${price} <:NewGoldus:725023149741047829>\n${cmd}**\n`
  },
  BUY: (item) => let answer = `Vous avez acheté **${name}** avec succès !`
 }
}
