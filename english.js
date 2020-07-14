module.exports = {
 NOT_TRANSLATE: "Sorry, this is not translate in **ENGLISH**.",
 NO_ARGS: (usage) => {
  let args = "**We need arguments to execute this command !**"
  if(usage) args += `\n**Here's how to use this command: \`${usage}\`**`
  return args
 },
 MISSING_PERMISSIONS: (perm) => `**<:CheckNo:719807585015824414> | You don't have the permission \`${perm}\` to use this command.**`,
 COOLDOWN: (time, cmd) => `**🕑 Please wait ${time} second(s) before using the command \`${cmd}\`.**`,
 MONEY_ADD: (amt) => `**you just get ${amt} <:NewGoldus:725023149741047829>**`,
 ACTION_FAILED: (amount, verb) => `You need **${amount} <:NewGoldus:725023149741047829>** to do that !`,
 HELP: {
  CMD_LIST: (nb) => `<:Help:728617506964635659> | List of commands • ${nb} commands`,
  CMD_RAPPEL: "<a:notif:719806925788676157> | **Reminder :** Arguments beetween `<>` are obligatory and arguments between `[]` are optional.",
 },
 PING: {
  API: "<a:DiscordFr_SpinDiscord:724945863214104577> | API's latency :",
  ROBOT: "<:DiscordFr_Bot:724946149299191818> | Robot's latency : ",
  MSG: "<a:DiscordFr_Typing:724946684563554385> | Message's latency :",
  QUALITE: "<a:DiscordFr_BlueLoading:724947426477080647> | Quality of the robot's latency :"
 },
 BAL: {
  MONEY_OF: (usertag) =>  `${usertag}'s money`,
  DISPLAY_MONEY: (pocket, bank, bankMax, global) => `**<:NewGoldus:725023149741047829> | Cash : ${pocket} <:NewGoldus:725023149741047829>\n<:CarteBancaire:725023239319060643> | Money in bank : ${bank} / ${bankMax}\n\n🌐 | Global money : ${global} <:NewGoldus:725023149741047829>**`
 },
 DEPOSIT: (amt) => `You have successfully added **${amt} <:NewGoldus:725023149741047829>** to your bank account!`,
 PAY: (amt) => ` gave **${amt} <:NewGoldus:725023149741047829>** to `, // Ping au début et à la fin
 SHOP: {
  BANK: {
   MENU: (name, price, cmd) => `**Name: ${name}\nPrice: ${price} <:NewGoldus:725023149741047829>\n${cmd}**\n`
  },
  BUY: (item) => `You have successfully purchased **${item}**!`
 },
 WITHDRAW: (amt) => `You have successfully withdrawn **${amt} <:NewGoldus:725023149741047829>** of tour bank account!`,
 CRIME: {
  SUCCES: (amt) => `**:gem: You successfully rob a bank, you get **${amt} <:NewGoldus:725023149741047829>**`,
  SUCCES_AUTHOR: (usertag) => `${usertag}'s loot`,
  FAILED: (amt) => `**:police_officer: You tried to rob a bank but you get caught by the police, you have to pay **${amt} <:NewGoldus:725023149741047829>**`,
  FAILED_AUTHOR: (usertag) => `${usertag}'s fine`
 },
 WORK: {
  DESC: (amt) => `**:hammer: You did great job, you are paying **${amt} <:NewGoldus:725023149741047829>**`,
  AUTHOR: (usertag) => `${usertag}'s pay`
 },
 RANK: {
  AUTHOR: (usertag) => `${usertag}'s experience`,
  DESC: "<:DiscordFr_Potion:725019354214695032> | Total experience :",
  LVL_NAME: "<a:DiscordFr_StarGif:725019476264747086> | Level :",
  RANK_NAME: "<:4eme:726816527914893402> | Rank :",
  PROGRESS_NAME: "<:DiscordFr_ThisUp:725019995318517780> | Progress :",
 },
 MODULE: {
  ENABLE: (name) => `**<:CheckYes:719807502966849627> | The \`${name}\` module has just been successfully activated ! M**`,
  ALREADY_ENABLE: (name) => `**<:CheckNo:719807585015824414> | The \`${name}\` module is already activated on the server.**`,
  DISABLE: (name) => `**<:CheckYes:719807502966849627> | The \`${name}\` module has just been successfully disabled !**`,
  ALREADY_DISABLE: (name) => `**<:CheckNo:719807585015824414> | The \`${name}\` module is already disabled on the server.**`
 },
 LEADERBOARD: {
  LIST: "**<:Help:728617506964635659> | List of leaderboards :\n\n<:DiscordFr_Potion:725019354214695032> | g!leaderboard rank\nShows the leaderboard levels\n<:NewGoldus:725023149741047829> | g!leaderboard money\nShows the leaderboard money\n🌐 | g!leaderboard gmoney\nShows the leaderboard global money**",
  POS: "<:DiscordFr_Potion:725019354214695032> | Position :",
  RANK_AUTHOR: (name) => `Top 10 ${name} levels`,
  MONEY_AUTHOR: (name) => `Top 10 ${name} rich`,
  GMONEY_AUTHOR: "Top 10 Global Rich"
 },
 CONFIG: {
  TITLE: "What configuration do you want to change ?",
  CHOOSEN_LANGUAGE: "You have successfully chosen the language **ENGLISH**!",
  SELECT_PREFIX: "Send a message that contains the chosen prefix.",
  SET_PREFIX: (prefix) => `You have successfully chosen the prefix **\`${prefix}\`**!`
 },
 IC: {
  FOOTER: (serv) => `Sent from : ${serv}`,
  STATUS: {
   ONLINE: "Online",
   DND: "Do not disturb",
   IDLE: "Idle",
   STREAMING: "Stream",
   OFFLINE: "Offline"
  },
  STATE: {
   STATUS: "Status :",
   PLAYING: "Playing :",
   LISTENING: "Listening :",
   WATCHING: "Watching :",
   STREAM: "Streaming :"
  }
 }
}
