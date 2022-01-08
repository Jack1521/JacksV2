let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw 'No'
  if (isAdmin) throw 'Even though Iam already an admin'
  await conn.groupMakeAdmin(m.chat, [m.sender])
}
handler.command = /^admin.$/i
handler.rowner = true
handler.botAdmin = true
module.exports = handler
