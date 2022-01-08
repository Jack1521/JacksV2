let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) throw `_*no voting in this group!*_\n\n*${usedPrefix}start voting* - to start voting`
    delete conn.vote[id]
    m.reply(`Done!`)

}
handler.help = ['unvote']
handler.tags = ['vote']
handler.command = /^(delete|delete)vote$/i
handler.group = true
handler.admin = true
module.exports = handler