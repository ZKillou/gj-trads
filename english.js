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
 ACTION_FAILED: (amount, verb) => let answer = `You need **${amount} <:NewGoldus:725023149741047829>** to do that !`,
 HELP: {
  CMD_LIST: (nb) => let answer = `<:Help:728617506964635659> | List of commands • ${nb} commands`,
  CMD_RAPPEL: "<a:notif:719806925788676157> | **Reminder :** Arguments beetween `<>` are obligatory and arguments between `[]` are optional.",
 },
 PING: {
  API: "<a:DiscordFr_SpinDiscord:724945863214104577> | API's latency :",
  ROBOT: "<:DiscordFr_Bot:724946149299191818> | Robot's latency : ",
  MSG: "<a:DiscordFr_Typing:724946684563554385> | Message's latency :",
  QUALITE: "<a:DiscordFr_BlueLoading:724947426477080647> | Quality of the robot's latency :"
 },
 BAL: {
  MONEY_OF: (usertag) => let answer = `${usertag}'s money`,
  DISPLAY_MONEY: (pocket, bank, bankMax, global) => let answer = `**<:NewGoldus:725023149741047829> | Cash : ${pocket} <:NewGoldus:725023149741047829>\n<:CarteBancaire:725023239319060643> | Money in bank : ${bank} / ${bankMax}\n\n🌐 | Global money : ${global} <:NewGoldus:725023149741047829>**`
 },
 DEPOSIT: (amt) => let answer = `You have successfully added **${amt} <:NewGoldus:725023149741047829>** to your bank account!`,
 PAY: (amt) => let answer = ` gave **${amt} <:NewGoldus:725023149741047829>** to `, // Ping au début et à la fin
 SHOP: {
  BANK: {
   MENU: (name, price, cmd) => let answer = `**Name: ${name}\nPrice: ${price} <:NewGoldus:725023149741047829>\n${cmd}**\n`
  },
  BUY: (item) => let answer = `You have successfully purchased **${name}**!`
 },
 WITHDRAW: (amt) => let answer = `You have successfully withdrawn **${amt} <:NewGoldus:725023149741047829>** of tour bank account!`,
 CRIME: {
  SUCCES: (amt) => let answer = `**:gem: You successfully rob a bank, you get **${amt} <:NewGoldus:725023149741047829>**`,
  SUCCES_AUTHOR: (usertag) => let answer = `${usertag}'s loot`,
  FAILED: (amt) => let answer = `**:police_officer: You tried to rob a bank but you get caught by the police, you have to pay **${amt} <:NewGoldus:725023149741047829>**`,
  FAILED_AUTHOR: (usertag) => let answer = `${usertag}'s fine`
 },
 WORK: {
  DESC: (amt) => let answer = `**:hammer: You did great job, you are paying **${amt} <:NewGoldus:725023149741047829>**`,
  AUTHOR: (usertag) => let answer = `${usertag}'s pay`
 },
 RANK: {
  AUTHOR: (usertag) => let answer = `${usertag}'s experience`,
  DESC: "<:DiscordFr_Potion:725019354214695032> | Total experience :",
  LVL_NAME: "<a:DiscordFr_StarGif:725019476264747086> | Level :",
  RANK_NAME: "<:4eme:726816527914893402> | Rank :",
  PROGRESS_NAME: "<:DiscordFr_ThisUp:725019995318517780> | Progress :",
 },
 MODULE: {
  ENABLE: (name) => let answer = `**<:CheckYes:719807502966849627> | The \`${name}\` module has just been successfully activated ! M**`,
  ALREADY_ENABLE: (name) => let answer = `**<:CheckNo:719807585015824414> | The \`${name}\` module is already activated on the server.**`,
  DISABLE: (name) => let answer = `**<:CheckYes:719807502966849627> | The \`${name}\` module has just been successfully disabled !**`,
  ALREADY_DISABLE: (name) => let answer = `**<:CheckNo:719807585015824414> | The \`${name}\` module is already disabled on the server.**`
 },
 LEADERBOARD: {
  LIST: "**<:Help:728617506964635659> | List of leaderboards :\n\n<:DiscordFr_Potion:725019354214695032> | g!leaderboard rank\nShows the leaderboard levels\n<:NewGoldus:725023149741047829> | g!leaderboard money\Shows the leaderboard money\n🌐 | g!leaderboard gmoney\Shows the leaderboard global money**",
  POS: "<:DiscordFr_Potion:725019354214695032> | Position :",
  RANK_AUTHOR: (name) => let answer = `Top 10 ${name} levels`,
  MONEY_AUTHOR: (name) => let answer = `Top 10 ${name} rich`,
  GMONEY_AUTHOR: "Top 10 Global Rich"
 },
 CONFIG: {
  TITLE: "What configuration do you want to change ?",
  CHOOSEN_LANGUAGE: "You have successfully chosen the language **ENGLISH**!",
  SELECT_PREFIX: "Send a message that contains the chosen prefix.",
  SET_PREFIX: (prefix) => let answer = `You have successfully chosen the prefix **\`${prefix}\`**!`
 },
 IC: {
  FOOTER: (serv) => let answer = `Sent from : ${serv}`,
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
