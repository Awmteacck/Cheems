//base by Awmtea Polythene
//re-upload? recode? copy code? give credit ya :)
//YouTube: @awmtea-polythene
//Instagram: awmtea._.polythene
//Telegram: t.me/Awmteapolythene
//GitHub: @Awmteacck
//WhatsApp: +918787651195
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='ur session id'

//owmner v card
global.ytname = "YT: Xeon" //ur yt chanel name
global.socialm = "GitHub: Awmteacck" //ur github or insta name
global.location = "India, Mizoram, Serchhip" //ur location

//new
global.botname = 'Cheems Bot MD V11' //ur bot name
global.ownernumber = '918787651195' //ur owner number
global.ownername = 'Awmtea Polythene' //ur owner name
global.websitex = "https://www.youtube.com/@awmtea-polythene"
global.wagc = "https://whatsapp.com/channel/0029Vakp5lvI7BeHPAtVmx2a"
global.themeemoji = '🪀'
global.wm = "Flex Bot Inc."
global.botscript = 'https://github.com/Awmteacck/Cheems' //script link
global.packname = "Sticker By"
global.author = "Awmtea Polythene\n\n+918787651195"
global.creator = "918787651195@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["918787651195"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
