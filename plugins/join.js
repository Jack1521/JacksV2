let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw 'Link invalid'
    let res = await conn.acceptInvite(code)
    m.reply(`Successfully joined the group ${res.gid}`)
}
handler.help = ['join <gc invite link>']
handler.tags = ['host']

handler.command = /^join$/i

handler.premium = true

module.exports = handler
