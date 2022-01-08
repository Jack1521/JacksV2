let handler = async (m, { conn, usedPrefix }) => {
    let chats = Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned)
    let users = Object.entries(global.db.data.users).filter(user => user[1].banned)
    
    m.reply(`
┌ *𝙻𝚒𝚜𝚝 𝚘𝚏 𝙱𝚊𝚗𝚗𝚎𝚍 𝙲𝚑𝚊𝚝𝚜💬*
│ Total : ${chats.length} Chat${chats ? '\n' + chats.map(([jid], i) => `
│ ${i + 1}. ${conn.getName(jid) == undefined ? 'Unknown' : conn.getName(jid)}
│ ${jid}
`.trim()).join('\n') : ''}
└────

┌ *𝙻𝚒𝚜𝚝 𝚘𝚏 𝙱𝚊𝚗𝚗𝚎𝚍 𝚄𝚜𝚎𝚛𝚜👩‍💻*
│ Total : ${users.length} User${users ? '\n' + users.map(([jid], i) => `
│ ${i + 1}. ${conn.getName(jid) == undefined ? 'Unknown' : conn.getName(jid)}
│ ${jid}
`.trim()).join('\n') : ''}
└────
`.trim())
}
handler.help = ['bannedlist']
handler.tags = ['info']
handler.command = /^listban(ned)?|ban(ned)?list|daftarban(ned)?$/i
module.exports = handler
