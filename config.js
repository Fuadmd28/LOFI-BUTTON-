/* SOURCE ORI BY RTXZY & BETABOT, PENULIS ULANG NAN SAKKARIN
Thanks to: 
- Allah SWT 
- Hyzer
- Erlanrahmat
- BOTCAHX
- Kurukuu-MD
- Nayla Hanifah
- Nan Sakkarin ( Saka )
- Khasan
- NansOffc
- Hokkai 
- H4RDOFFC
- Zykomd
*/
//---------------- ISI SESUAI NO LU AMA BOT ----------------
global.owner = ['6281335334848']  
global.mods = ['6281335334848'] 
global.prems = ['6281335334848']
global.cljoins = ['6281335334848']
global.numberowner = '6281335334848' 
global.nomorbot = '6288807284319'

//---------------- UNTUK FITUR DONASI ----------------
global.dana = '6281335334848'
global.pulsa = '6281335334848'
global.gopay = '6281335334848'

//---------------- GANTI SESUAI NAMA BOT DLL ----------------
global.nameowner = 'Nan Sakkarin'
global.namebot = 'Arine Bot'
global.namebot2 = 'A R I N E - B O T'
global.namebot3 = 'A R I N E - M U L T I D E V I C E'
global.mail = 'arinebotz@gmail.com' 
global.gc = 'https://chat.whatsapp.com/GXhv1rspryP4bp8c4CzgBW'
global.gcjoinpaksa = 'https://chat.whatsapp.com/HgXns5mQ8wOIH5u8XMZsWT'
global.web = 'https://youtube.com/nansakkarin'
global.instagram = 'https://instagram.com/nskn'

//---------------- WATERMARK BOT ----------------
global.wm = 'Nan Sakkarin'
global.watermark = wm
global.wm2 = '⫹⫺ Arine Bot'
global.wm3 = '© sakkarin'
global.wm4 = 'Made by Arine Bot'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'

//---------------- STIKER WM ----------------
global.packname = 'Made with'
global.author = 'Arine Bot\nNomor bot\n+62 888-0728-4319'

global.benar = 'Benar ✅\n'
global.salah = 'Salah ❌\n'

//---------------- IMAGE THUMBNAIL ----------------
global.thumb = pickRandom(['https://btch.pages.dev/file/f1d60c593b94d33a05b03.jpg','https://btch.pages.dev/file/bf620a7cbf2aaec5f3ff7.jpg','https://btch.pages.dev/file/3e9c02e48ff6b827c0d0a.jpg','https://btch.pages.dev/file/2089345936cf1c05bdb3f.jpg','https://btch.pages.dev/file/7c3c74867a0e209ccdd40.jpg','https://btch.pages.dev/file/e8890a8836af8598a02b0.jpg'])
//--------------- NAMA CHARACTER AI/CAI ----------------
global.cai = 'Arine'


//===> APIKEY 
global.apikeyJ = 'APIKEY_CAI'
global.lann = 'APIKEY_LU'
global.APIs = {   
  lann: 'https://api.betabotz.eu.org',
}
global.APIKeys = { 
  'https://api.betabotz.eu.org': 'APIKEY_LU'
}

// ---------------- GAUSAH DI UBAH ----------------

global.htki = "───『"
global.htka = "』───"
global.htjava = pickRandom(["乂", "⛶", "❏", "⫹⫺", "☰", "⎔", "✦", "⭔", "⬟", "⛊", "⚝"])
global.pmenus = '┊' 

global.multiplier = 45
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
