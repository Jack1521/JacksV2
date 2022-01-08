let handler = async (m, { text }) => {
  let user = global.db.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  m.reply(`
*AFK TURNED ON*\n\n*📧Name*: ${conn.getName(m.sender)} is now AFK❕\n*❓Reason*${text ? ': ' + text : ''}
`)
}
handler.help = ['afk [reason]']
handler.tags = ['main']
handler.command = /^afk$/i

module.exports = handler