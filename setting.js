const chalk = require("chalk")
const fs = require("fs")

  global.ownerNumber = "6282297337173@s.whatsapp.net"
  global.kontakOwner = "6282297337173"
  global.namaStore = "Lippz Store"
  global.botName = "Lippz Store"
  global.ownerName = "Lippz"
  
  
  global.linkyt = "gapunya"
  global.linkig = "@mcciatx"
  global.dana = "082297337173"
  global.gopay = "082297337173"
  global.ovo = "082297337173"
  global.sawer = "SCAN QRIS DIATAS"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})