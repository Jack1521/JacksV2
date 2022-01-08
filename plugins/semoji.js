// Terimakasih kpd RC047 :v
// Fitur By Xteams
// Modified by Nurutomo (Update Xteam :v)

const { sticker } = require('../lib/sticker')
const fetch = require('node-fetch')
const defaultType = 'whatsapp'
let handler = async (m, { usedPrefix, conn, args, text }) => {
  let [type, emoji] = text.includes('|') ? text.split('|') : args
  if (type && !emoji) {
    emoji = type
    type = defaultType
  }
  if (!emoji) throw `
Please enter the emoji

Example ${usedPrefix}semoji whatsapp 😎

List Type:
${[
  "apple",
  "google",
  "samsung",
  "microsoft",
  "whatsapp",
  "twitter",
  "facebook",
  "joypixels",
  "openmoji",
  "emojidex",
  "messenger",
  "lg",
  "htc",
  "mozilla",
  "softbank",
  "docomo",
  "au_by_kddi"
].map(v => `- ${v}`).join('\n')}
`.trim()
  emoji = emoji.trim()
  type = type.trim().toLowerCase()

  let res = await fetch(global.API('xteam', '/sticker/emojitopng', { emo: emoji.trim() }, 'APIKEY'))
  if (!res.ok) throw res.text()
  let json = await res.json()
  if (!json.status) throw json
  if (!(type in json.result)) type = defaultType
  let stiker = await sticker(null, json.result[tipe].img, global.packname, global.author, [emoji], { name: json.result[tipe].name })
  //   m.reply(`
  // Type: ${type}
  // Emoji: ${emoji}
  // `.trim())
  m.reply(stiker)
}
handler.help = ['semoji [type] <emoji>']
handler.tags = ['sticker']
handler.command = /^s?emo(ji)?$/i
module.exports = handler
