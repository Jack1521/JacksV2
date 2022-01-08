let handler  = async (m, { conn, command, text }) => {
  let type = command.replace(/^set(menu|help|\?)/, '').toLowerCase()
  if (type == '') {
    if (text) {
      conn.menu = text
      conn.reply(m.chat, 'Menu successfully set\n' + info, m)
    } else {
      conn.menu = {}
      conn.reply(m.chat, 'Menu Direset', m)
    }
  } else {
    conn.menu = typeof conn.menu == 'object' ? conn.menu : {}
    if (text) {
      conn.menu[type] = text
      conn.reply(m.chat, 'Menu' + type + 'Successfully set\n' + info, m)
    } else {
      delete conn.menu[type]
      conn.reply(m.chat, 'Menu' + type + 'Direset', m)
    }
  }
}
handler.help = ['', 'before','header','body','footer','after'].map(v => 'setmenu' + v + ' <text>')
handler.tags = ['owner']
handler.command = /^set(menu|help|\?)(before|header|body|footer|after)?$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

let info = `
Universal:
%% (%)
%p (Prefix)
%exp (Current Exp)
$maxexp (Exp To Level Up)
%totalexp (Total Exp)
%xp4levelup (Exp needed to level up)
%limit (Limit)
%name (Name)
%weton (Weton Today)
%week (Day)
%date (Date)
%time (Hour)
%uptime (Uptime Bot)
%rtotalreg (Number of users registered in the database)
%totalreg (Number of users in the database)
%npmname
%npmdesc
%version
%github

Header & Footer Menu Section:
%category (Category)

Body Menu Section:
%cmd (Command)
%islimit (If the command is limited)
`.trim()
