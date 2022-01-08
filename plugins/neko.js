// xie hua piao piao batman opened the refrigerator and took a watermelon and then put mayo on top of the watermelon

let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/neko')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'Nyaa🐾', m)
}
handler.help = ['neko']
handler.tags = ['internet']
handler.command = /^neko$/i

module.exports = handler
