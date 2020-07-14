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
 WITHDRAW: (amt) => let answer = `Sie haben erfolgreich **${amt} <:NewGoldus:725023149741047829>** von Ihrem Bankkonto abgebucht!`,
 CRIME: {
  SUCCES: (amt) => let answer = `**:gem: Sie haben gerade eine Bank ausgeraubt, Sie bekommen **${amt} <:NewGoldus:725023149741047829>**`,
  SUCCES_AUTHOR: (usertag) => let answer = `${usertag}s Beute`,
  FAILED: (amt) => let answer = `**:police_officer: Sie kommen aus einem Einbruch heraus, aber die Polizei findet Sie, Sie müssen **${amt} <:NewGoldus:725023149741047829>** bezahlen`,
  FAILED_AUTHOR: (usertag) => let answer = `${usertag}s Fein`
 },
 WORK: {
  DESC: (amt) => let answer = `**:hammer: Als Belohnung für Ihre harte Arbeit. Sie erhalten **${amt} <:NewGoldus:725023149741047829>**`,
  AUTHOR: (usertag) => let answer = `${usertag}s Bezahlt`
 },
 RANK: {
  AUTHOR: (usertag) => let answer = `${usertag}s Erfahrungspunkt`,
  DESC: "<:DiscordFr_Potion:725019354214695032> | Gesamterfahrungspunkt :",
  LVL_NAME: "<a:DiscordFr_StarGif:725019476264747086> | Niveau :",
  RANK_NAME: "<:4eme:726816527914893402> | Rang :",
  PROGRESS_NAME: "<:DiscordFr_ThisUp:725019995318517780> | Fortschreiten :",
 },
 MODULE: {
  ENABLE: (name) => let answer = `**<:CheckYes:719807502966849627> | Das \`${name}\`-Modul wurde gerade erfolgreich aktiviert!**`,
  ALREADY_ENABLE: (name) => let answer = `**<:CheckNo:719807585015824414> | Das \`${name}\`-Modul ist bereits auf dem Server aktiviert.**`,
  DISABLE: (name) => let answer = `**<:CheckYes:719807502966849627> | Das \`${name}\`-Modul wurde gerade erfolgreich deaktiviert!**`,
  ALREADY_DISABLE: (name) => let answer = `**<:CheckNo:719807585015824414> | Das \`${name}\`-Modul ist auf dem Server bereits deaktiviert.**`
 },
 LEADERBOARD: {
  LIST: "**<:Help:728617506964635659> | Rangliste :\n\n<:DiscordFr_Potion:725019354214695032> | g!leaderboard rank\nZeigt die Ebenenklassifizierung an\n<:NewGoldus:725023149741047829> | g!leaderboard money\nZeigt das Geldranking an\n🌐 | g!leaderboard gmoney\nZeigt das gesamte Geldranking an**",
  POS: "<:DiscordFr_Potion:725019354214695032> | Position :",
  RANK_AUTHOR: (name) => let answer = `Top 10 Level von ${name}`,
  MONEY_AUTHOR: (name) => let answer = `Top 10 reiche Leute von ${name}`,
  GMONEY_AUTHOR: "Top 10 der globalen Reichen"
 },
 CONFIG: {
  TITLE: "Welche Konfiguration möchten Sie ändern?",
  CHOOSEN_LANGUAGE: "Sie haben die **DEUTSCHE** Sprache erfolgreich gewählt!",
  SELECT_PREFIX: "Senden Sie eine Nachricht mit dem ausgewählten Präfix",
  SET_PREFIX: (prefix) => let answer = `Sie haben das Präfix **\`${prefix}\`** mit Erfolg !`
 },
 IC: {
  FOOTER: (serv) => let answer = `Gesendet von : ${serv}`,
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
 }
}
