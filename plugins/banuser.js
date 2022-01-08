let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text}) => {
    if (!text) throw 'Who wants to be banned?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag him/her'
    let users = global.db.data.users
    users[who].banned = true
    conn.reply(m.chat, `Got banned xD`, m)
}
handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^ban$/i
handler.rowner = true

module.exports = handler
