const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `You are already registered\nWant to re-register?\n Type *${usedPrefix}unreg <SN|SERIAL NUMBER>*`
  if (!Reg.test(text)) throw `Incorrect format\n*${usedPrefix}reg name.age*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Name cannot be empty (Alphanumeric)'
  if (!age) throw 'Age cannot be empty (Number)'
  age = parseInt(age)
  if (age > 120) throw 'Age too old '
  if (age < 5) throw 'Babies can type according to the Indian format ._.'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
*Register successful!☑️*
┏━「 𝙄𝙉𝙁𝙊ℹ️」
┃📧Name: ${name}
┃🎅Age: ${age} year
┃🔢SN: ${sn}
┗━━━━
`.trim())
}
handler.help = ['list', 'reg', 'register'].map(v => v + ' <name>.<age>')
handler.tags = ['exp']

handler.command = /^(list|reg(ister)?)$/i

module.exports = handler