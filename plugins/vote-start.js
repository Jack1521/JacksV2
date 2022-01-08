let handler = async (m, { conn, text, usedPrefix }) => {
    conn.vote = conn.vote ? conn.vote : {}
    let id = m.chat
    if (id in conn.vote) {
        throw `_There are still votes in this chat!_\n\n*${usedPrefix}delete* - to delete the vote`
    }
    m.reply(`Voting begins!\n\n*${usedPrefix}upvote* - for yes\n*${usedPrefix}devote* - for not\n*${usedPrefix}checkvote* - to check vote\n*${usedPrefix}deletevote* - to delete vote`)
    conn.vote[id] = [
        text,
        [],
        []
    ]
}
handler.help = ['startvote [reason]']
handler.tags = ['vote']
handler.command = /^(start|start)vote$/i
handler.limit = true
handler.group = true
handler.admin = true
module.exports = handler