/*
ENC BANG🗿

MW NO ENC?
BOLEH, 40K AJA HEHE

🗣️:  mahal banget
👤: BIARIN, KLO ADA YG BELI, YA BAGUS
KLO GK ADA YA BODO AMAT

GW JUGA GA NIAT JUAL🗿
klo membeli, ke nomor ini 081335334848
dijual cuma ke 4 orang pertama, no enc 99,99%
enc main.js doang, soalnya bukan punya gw🗿
*/




//━━━━━━━━[ DEFAULT SETTINGS ]━━━━━━━━//
let { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let levelling = require('../lib/levelling')
let fs = require('fs')
const util = require('util')
const os = require('os')
let path = require('path')
let { createHash} = require('crypto')
let fetch = require('node-fetch')
let { perfomance } = require('perf_hooks')
let moment = require('moment-timezone')

//━━━━━━━━[ CATEGORY ]━━━━━━━━//
let handler = async (m, { conn, usedPrefix: _p, args, usedPrefix, command }) => {
try {
  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'main', 'downloader', 'sticker', 'xp', 'game', 'asupan', 'group', 'fun', 'tools', 'internet', 'info', 'islam', 'kerang', 'maker', 'stalk', 'quotes', 'shortlink', 'anonymous', 'voicechanger', 'image', 'nsfw', 'owner', 'advanced']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
   'main': 'MENU UTAMA',
  'downloader': 'MENU DOWNLOADER',
  'sticker': 'MENU CONVERT',
  'xp': 'MENU EXP',
  'game': 'MENU GAME',
  'group': 'MENU GROUP',
  'fun': 'MENU FUN',
  'tools': 'MENU TOOLS',
  'internet': 'INTERNET',
  'info': 'MENU INFO',
  'islam' : 'MENU ISLAMI',
  'kerang': 'MENU KERANG',
  'asupan': 'MENU ASUPAN',
  'maker': 'MENU MAKER',
  'quotes' : 'MENU QUOTES',
  'stalk': 'MENU STALK',
  'shortlink': 'SHORT LINK',
  'anonymous': 'ANONYMOUS CHAT',
  'voicechanger': 'VOICE CHANGER',
  'image': 'MENU IMAGE',
  'nsfw': 'MENU NSFW',
  'owner': 'MENU OWNER',
  'advanced': 'ADVANCED',
  }
  if (teks == 'main') tags = {
    'main': 'MENU UTAMA',
  }
  if (teks == 'downloader') tags = {
  'downloader': 'MENU DOWNLOADER',
  }
  if (teks == 'sticker') tags = {
  'sticker': 'MENU CONVERT',
  }
  if (teks == 'xp') tags = {
  'xp': 'MENU EXP',
  }
   if (teks == 'asupan') tags = {
  'asupan': 'MENU ASUPAN', 
  }
  if (teks == 'game') tags = {
  'game': 'MENU GAME',
  }
  if (teks == 'group') tags = {
  'group': 'MENU GROUP',
  }
  if (teks == 'fun') tags = {
  'fun': 'MENU FUN',
  }
  if (teks == 'tools') tags = {
  'tools': 'MENU TOOLS',
  }
  if (teks == 'internet') tags = {
  'internet': 'INTERNET',
  }
  if (teks == 'info') tags = {
  'info': 'MENU INFO',
  }
  if (teks == 'islam') tags = {
  'islam': 'MENU ISLAMI',
  }
  if (teks == 'kerang') tags = {
  'kerang': 'MENU KERANG',
  }
  if (teks == 'maker') tags = {
  'maker' : 'MENU MAKER',
  }
  if (teks == 'quotes') tags = {
  'quotes': 'MENU QUOTES',
  }
  if (teks == 'stalk') tags = {
  'stalk': 'MENU STALK',
  }
  if (teks == 'shortlink') tags = {
    'shortlink': 'SHORTLINK',
  }
  if (teks == 'anonymous') tags = {
  'anonymous': 'ANONYMOUS CHAT',
  }
  if (teks == 'voicechanger') tags = {
  'voicechanger': 'VOICE CHANGER',
  }
  if (teks == 'image') tags = {
  'image': 'MENU IMAGE',
  }
  if (teks == 'nsfw') tags = {
  'nsfw' : 'MENU NSFW',
  }
  if (teks == 'owner') tags = {
  'owner': 'MENU OWNER',
  }
  if (teks == 'advanced') tags = {
  'advanced': 'MENU ADVANCED',
  }
  
  
//━━━━━━━━[ UNTUK UBAH FONT ]━━━━━━━━//
 function _0x5720(_0x4da124,_0xb42620){var _0x126271=_0x1262();return _0x5720=function(_0x5720c5,_0x534e46){_0x5720c5=_0x5720c5-0x198;var _0x85b218=_0x126271[_0x5720c5];return _0x85b218;},_0x5720(_0x4da124,_0xb42620);}(function(_0x5ae38b,_0x2f3e8c){var _0x727428=_0x5720,_0x3b0b96=_0x5ae38b();while(!![]){try{var _0x2893fe=parseInt(_0x727428(0x1a5))/0x1*(parseInt(_0x727428(0x1ac))/0x2)+parseInt(_0x727428(0x1a6))/0x3*(-parseInt(_0x727428(0x19b))/0x4)+-parseInt(_0x727428(0x1a7))/0x5+parseInt(_0x727428(0x1a3))/0x6+-parseInt(_0x727428(0x198))/0x7*(-parseInt(_0x727428(0x19f))/0x8)+-parseInt(_0x727428(0x19e))/0x9*(-parseInt(_0x727428(0x19a))/0xa)+parseInt(_0x727428(0x1a0))/0xb*(parseInt(_0x727428(0x1a1))/0xc);if(_0x2893fe===_0x2f3e8c)break;else _0x3b0b96['push'](_0x3b0b96['shift']());}catch(_0x1047b2){_0x3b0b96['push'](_0x3b0b96['shift']());}}}(_0x1262,0x42e63),Styles=(_0xaea222,_0x5a4be3=0x1)=>{var _0x16dc3a=_0x5720,_0x462423='abcdefghijklmnopqrstuvwxyz1234567890'[_0x16dc3a(0x1a4)](''),_0xd22c1b=Object[_0x16dc3a(0x1a9)]({0x1:_0x16dc3a(0x1aa)}),_0x35bf2a=[];_0x462423[_0x16dc3a(0x199)]((_0x3bbbc5,_0x402c12)=>_0x35bf2a[_0x16dc3a(0x19d)]({'original':_0x3bbbc5,'convert':_0xd22c1b[_0x5a4be3][_0x16dc3a(0x1a4)]('')[_0x402c12]}));var _0x517064=_0xaea222[_0x16dc3a(0x1a8)]()[_0x16dc3a(0x1a4)](''),_0x188dfe=[];return _0x517064['map'](_0x5085df=>{var _0x2e4e12=_0x16dc3a;const _0xfe6187=_0x35bf2a[_0x2e4e12(0x1ab)](_0x5c9470=>_0x5c9470[_0x2e4e12(0x19c)]==_0x5085df);_0xfe6187?_0x188dfe[_0x2e4e12(0x19d)](_0xfe6187[_0x2e4e12(0x1a2)]):_0x188dfe[_0x2e4e12(0x19d)](_0x5085df);}),_0x188dfe['join']('');});function _0x1262(){var _0x33bfbd=['1588932ODdCwq','split','2iGGQDq','1096797gdauXr','1443340RldTGw','toLowerCase','freeze','ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890','find','317804mJmGbb','1325723Pnpurp','map','361420pbbiHi','4oqdLob','original','push','18ApehFw','8NDzgFa','923857rCvlTx','12oLXItm','convert'];_0x1262=function(){return _0x33bfbd;};return _0x1262();}let greeting='';const greetingText=Styles(greeting,0x1);
  //━━━━━━━━[ DEFAULT MENU ]━━━━━━━━//
const defaultMenu = {
  before:``.trimStart(), 
  header: '*「 %category 」*',
  body: '> %cmd %islimit %isPremium',
  footer: '> ────\n', 
  after: `Made With ${global.nameowner}`,
}


//━━━━━━━━[ DATABASE USER ]━━━━━━━━//
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender 
    let name = conn.getName(m.sender)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let premium = global.db.data.users[m.sender].premium
     let d1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    let d2 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    let d3  = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    let d4 = 'application/pdf'
    let d5 = 'application/vnd.android.package-archive'
    let d6 = 'application/zip'
    let d7 = 'application/PNG'
    let td = `${pickRandom([d1,d2,d3,d4,d5,d6])}`
    let user = global.db.data.users[who]
    let { exp, limit, level, money, role } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let tag = `@${m.sender.split('@')[0]}`
 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}

//━━━━━━━━[ TIMER ]━━━━━━━━//
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let waktuwib = moment.tz('Asia/Jakarta').format('HH:mm:ss')

//━━━━━━━━[ SETTING HELP ]━━━━━━━━//
let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
    return {
      help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
      tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
      prefix: 'customPrefix' in plugin,
      limit: plugin.limit,
      premium: plugin.premium,
      enabled: !plugin.disabled,
    }
  })

//━━━━━━━━[ FAKE REPLY ]━━━━━━━━//
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}
const ftroli = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2023,
    status: 1,
    surface : 1,
    message: `Hai Kak ${m.name}!`, 
    orderTitle: `▮Menu ▸`,
    thumbnail: thumb, //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
const fdoc = {
   key : {
   remoteJid: 'status@broadcast',
   participant : '0@s.whatsapp.net'
   },
   message: {
   documentMessage: {
   title: wm, 
   }
   }
   }

//━━━━━━━━[ BAGIAN MENU ]━━━━━━━━//
let sknurls = pickRandom(['https://btch.pages.dev/file/f1d60c593b94d33a05b03.jpg','https://btch.pages.dev/file/bf620a7cbf2aaec5f3ff7.jpg','https://btch.pages.dev/file/3e9c02e48ff6b827c0d0a.jpg','https://btch.pages.dev/file/2089345936cf1c05bdb3f.jpg','https://btch.pages.dev/file/7c3c74867a0e209ccdd40.jpg','https://btch.pages.dev/file/e8890a8836af8598a02b0.jpg'])

let text = `Hai ${tag} ${global.ucapan}
Saya adalah bot WhatsApp, yang dapat membantu pengguna whatsapp

> ▢ Waktu: ${time}
> ▢ Tanggal: ${week} ${weton}
> ▢ Tanggal: ${date}
> ▢ Islamic date: ${dateIslamic}
> ▢ Uptime: ${uptime}
> ▢ Database: ${rtotalreg} dari ${totalreg}
> ▢ Source: s.id/sknch`
if (teks == '404') {

function _0x3d5c(_0x198884,_0x55a718){const _0x49e1de=_0x49e1();return _0x3d5c=function(_0x3d5c79,_0x484c7e){_0x3d5c79=_0x3d5c79-0x1a2;let _0xa0f1da=_0x49e1de[_0x3d5c79];return _0xa0f1da;},_0x3d5c(_0x198884,_0x55a718);}function _0x49e1(){const _0x16b999=['💌\x20','😋🗿','Random\x20inspirasi','Recommended','.?\x20owner','📩\x20','2079906aSHPbz','.?\x20internet','🖼️\x20','\x20Tools','🖨️\x20','\x20ᴍᴀɪɴ\x20','📑\x20','Hayo,\x20mau\x20kepoin\x20siapa??','\x20Voice\x20Changer','\x20Fun','\x20Owner','\x20Islam','Memperpendek\x20link,\x20umurmu\x20juga\x20bisa','\x20Nsfw','🔦\x20','Fitur\x20yang\x20aman\x20untuk\x20keluarga','Menampilkan\x20Chanel\x20YouTube\x20pembuat\x20sc','1389PZhNGd','.?\x20maker','🔞\x20','.?\x20quotes','🏢\x20','📔\x20','🎨\x20','Download\x20sesuatu\x20dari\x20BOT','𝚂𝚘𝚞𝚛𝚌𝚎\x20𝙲𝚘𝚍𝚎\x20','\x20Internet','𝚂𝚞𝚙𝚙𝚘𝚛𝚝\x20𝙾𝚠𝚗𝚎𝚛\x20𝙰𝚐𝚊𝚛\x20𝙻𝚎𝚋𝚒𝚑\x20𝚂𝚎𝚖𝚊𝚗𝚐𝚊𝚝','.owner','🎙️\x20','Mungkin\x20tools\x20ini\x20bisa\x20membantu?','Buat\x20Sticker\x20diBOT','\x20𝚂𝙲𝚁𝙸𝙿𝚃\x20𝙱𝙾𝚃','\x20ᴍᴇɴᴜ\x20','😋\x20','\x20Image','2500890gBwBBl','Hanya\x20owner\x20yang\x20tau','Subscribe','\x20Game','\x20All','Bicara\x20dengan\x20orang\x20tidak\x20dikenal','Menampilkan\x20Semua\x20command\x20BOT','.ytskn','\x20sᴜᴘᴘᴏʀᴛ\x20','\x20Utama','.?\x20kerang','𝙼𝚎𝚗𝚊𝚖𝚙𝚒𝚕𝚔𝚊𝚗\x20𝚆𝚊𝚔𝚝𝚞\x20𝙱𝙾𝚃\x20𝙱𝚎𝚛𝚓𝚊𝚕𝚊𝚗','𝙼𝚎𝚗𝚊𝚖𝚙𝚒𝚕𝚔𝚊𝚗\x20𝙺𝚎𝚌𝚎𝚙𝚊𝚝𝚊𝚗\x20𝚁𝚎𝚜𝚙𝚘𝚗\x20𝙱𝙾𝚃','958sVPufQ','\x20Advanced','4212819oEJpUu','.?\x20all','𝙼𝚎𝚗𝚊𝚖𝚙𝚒𝚕𝚔𝚊𝚗\x20𝙸𝚗𝚏𝚘𝚛𝚖𝚊𝚜𝚒\x20𝚃𝚎𝚗𝚝𝚊𝚗𝚐\x20𝙾𝚠𝚗𝚎𝚛','.?\x20image','.?\x20asupan','\x20A\x20Litle\x20Promotion\x20','\x20𝙳𝙾𝙽𝙰𝚃𝙴','7MEeBnK','.?\x20shortli','Cari\x20sesuatu\x20diBOT','\x20𝚁𝚄𝙽𝚃𝙸𝙼𝙴\x20𝙱𝙾𝚃','\x20𝙾𝚆𝙽𝙴𝚁\x20𝙱𝙾𝚃','Ubah\x20Audio\x20dengan\x20Filter','🧩\x20','897195DuMWLK','🎮\x20','Only\x20Groups','\x20Stalk','.?\x20tools','638315BciJxD','.?\x20stiker','747128WBLiCJ','.?\x20nsfw','Menampilkan\x20Menu\x20Utama','♻️\x20','👩‍💻\x20','🎭\x20','.?\x20main','\x20Kerang','Tanyakan\x20pada\x20ketua\x20club','Gamenya\x20seru\x20seru\x20lho\x20(๑˃̵\u3000ᴗ\u3000˂̵)','.?\x20info','💬\x20','Boleh\x20dicoba','.?\x20group','\x20𝚂𝙿𝙴𝙴𝙳\x20𝙱𝙾𝚃','🔗\x20','📖\x20','.?\x20xp','8dstVNE','🐚\x20','YouTube\x20Sakkarin','\x20Xp','.sc','.donasi','.ping','\x20Shortlink'];_0x49e1=function(){return _0x16b999;};return _0x49e1();}const _0x28895c=_0x3d5c;(function(_0xd9d546,_0x1cd248){const _0x28d2cc=_0x3d5c,_0x49d3bd=_0xd9d546();while(!![]){try{const _0x43eaaf=parseInt(_0x28d2cc(0x1d6))/0x1+-parseInt(_0x28d2cc(0x1c6))/0x2*(parseInt(_0x28d2cc(0x1a6))/0x3)+-parseInt(_0x28d2cc(0x1dd))/0x4+parseInt(_0x28d2cc(0x1db))/0x5+parseInt(_0x28d2cc(0x1fd))/0x6*(-parseInt(_0x28d2cc(0x1cf))/0x7)+-parseInt(_0x28d2cc(0x1ef))/0x8*(-parseInt(_0x28d2cc(0x1c8))/0x9)+-parseInt(_0x28d2cc(0x1b9))/0xa;if(_0x43eaaf===_0x1cd248)break;else _0x49d3bd['push'](_0x49d3bd['shift']());}catch(_0x5b15d8){_0x49d3bd['push'](_0x49d3bd['shift']());}}}(_0x49e1,0x770e2));let nanskn=global['pmenus'];const sakkarin_ea=[{'title':htki+_0x28895c(0x202)+htka,'highlight_label':'','rows':[{'title':'⚡\x20'+nanskn+_0x28895c(0x1eb),'description':_0x28895c(0x1c5),'id':_0x28895c(0x1f5)},{'title':'⏰\x20'+nanskn+_0x28895c(0x1d2),'description':_0x28895c(0x1c4),'id':'.runtime'},{'title':_0x28895c(0x1f7)+nanskn+_0x28895c(0x1d3),'description':_0x28895c(0x1ca),'id':_0x28895c(0x1b1)},{'title':_0x28895c(0x1ab)+pmenus+_0x28895c(0x1b5),'description':_0x28895c(0x1ae)+namebot,'id':_0x28895c(0x1f3)}]},{'title':htki+_0x28895c(0x1c1)+htka,'highlight_label':_0x28895c(0x1f8),'rows':[{'title':'💹\x20'+pmenus+_0x28895c(0x1ce),'description':_0x28895c(0x1b0),'id':_0x28895c(0x1f4)}]},{'title':htki+_0x28895c(0x1b6)+htka,'highlight_label':_0x28895c(0x1fa),'rows':[{'title':_0x28895c(0x1e8)+pmenus+_0x28895c(0x1bd),'description':_0x28895c(0x1bf),'id':_0x28895c(0x1c9)},{'title':_0x28895c(0x1e0)+pmenus+_0x28895c(0x1c2),'description':_0x28895c(0x1df),'id':_0x28895c(0x1e3)},{'title':_0x28895c(0x1fc)+pmenus+'\x20downloaders','description':_0x28895c(0x1ad),'id':'.?\x20downloader'},{'title':_0x28895c(0x1ac)+pmenus+'\x20Stiker','description':_0x28895c(0x1b4),'id':_0x28895c(0x1dc)},{'title':'✨\x20'+pmenus+_0x28895c(0x1f2),'description':'Informasi\x20tentang\x20datamu','id':_0x28895c(0x1ee)},{'title':_0x28895c(0x1d7)+pmenus+_0x28895c(0x1bc),'description':_0x28895c(0x1e6),'id':'.?\x20game'},{'title':_0x28895c(0x1aa)+pmenus+'\x20Group','description':_0x28895c(0x1d8),'id':_0x28895c(0x1ea)},{'title':_0x28895c(0x1d5)+pmenus+_0x28895c(0x206),'description':_0x28895c(0x1a4),'id':'.?\x20fun'},{'title':'🛠️\x20'+pmenus+_0x28895c(0x200),'description':_0x28895c(0x1b3),'id':_0x28895c(0x1da)},{'title':'🌎\x20'+pmenus+_0x28895c(0x1af),'description':_0x28895c(0x1d1),'id':_0x28895c(0x1fe)},{'title':_0x28895c(0x1b7)+pmenus+'\x20Asupan','description':'Sebaiknya\x20jangan\x20gegabah🗿','id':_0x28895c(0x1cc)},{'title':'ℹ️\x20'+pmenus+'\x20Info','description':'Info\x20info\x20BOT','id':_0x28895c(0x1e7)},{'title':_0x28895c(0x1ed)+pmenus+_0x28895c(0x208),'description':'Tobat\x20yuk\x20kak','id':'.?\x20Islam'},{'title':_0x28895c(0x1f0)+pmenus+_0x28895c(0x1e4),'description':_0x28895c(0x1e5),'id':_0x28895c(0x1c3)},{'title':_0x28895c(0x201)+pmenus+'\x20Maker','description':_0x28895c(0x1e9),'id':_0x28895c(0x1a7)},{'title':_0x28895c(0x203)+pmenus+'\x20Quotes','description':_0x28895c(0x1f9),'id':_0x28895c(0x1a9)},{'title':_0x28895c(0x1a3)+pmenus+_0x28895c(0x1d9),'description':_0x28895c(0x204),'id':'.?\x20stalk'},{'title':_0x28895c(0x1ec)+pmenus+_0x28895c(0x1f6),'description':_0x28895c(0x209),'id':_0x28895c(0x1d0)},{'title':_0x28895c(0x1e2)+pmenus+'\x20Anonymous','description':_0x28895c(0x1be),'id':_0x28895c(0x1c3)},{'title':_0x28895c(0x1b2)+pmenus+_0x28895c(0x205),'description':_0x28895c(0x1d4),'id':'.?\x20voicechanger'},{'title':_0x28895c(0x1ff)+pmenus+_0x28895c(0x1b8),'description':'Random\x20photo\x20anime','id':_0x28895c(0x1cb)},{'title':_0x28895c(0x1a8)+pmenus+_0x28895c(0x1a2),'description':'Tch,\x20dasar\x20sagnean','id':_0x28895c(0x1de)},{'title':_0x28895c(0x1e1)+pmenus+_0x28895c(0x207),'description':'Owner\x20only!','id':_0x28895c(0x1fb)},{'title':'❓\x20'+pmenus+_0x28895c(0x1c7),'description':_0x28895c(0x1ba),'id':'.?\x20advanced'}]},{'title':htki+_0x28895c(0x1cd)+htka,'highlight_label':_0x28895c(0x1bb),'rows':[{'title':_0x28895c(0x1f1),'description':_0x28895c(0x1a5),'id':_0x28895c(0x1c0)}]}];
                                
const _0x54259e=_0x4ed2;(function(_0x1d5ae8,_0x1bc9d4){const _0x53006c=_0x4ed2,_0x27c348=_0x1d5ae8();while(!![]){try{const _0x23981c=-parseInt(_0x53006c(0x8d))/0x1*(-parseInt(_0x53006c(0x79))/0x2)+-parseInt(_0x53006c(0x95))/0x3*(-parseInt(_0x53006c(0x7b))/0x4)+parseInt(_0x53006c(0x8a))/0x5+parseInt(_0x53006c(0x91))/0x6+parseInt(_0x53006c(0x82))/0x7*(-parseInt(_0x53006c(0x90))/0x8)+-parseInt(_0x53006c(0x7a))/0x9+-parseInt(_0x53006c(0x8c))/0xa;if(_0x23981c===_0x1bc9d4)break;else _0x27c348['push'](_0x27c348['shift']());}catch(_0x4f5fe5){_0x27c348['push'](_0x27c348['shift']());}}}(_0x2f30,0x5a8aa));let media=await prepareWAMessageMedia({'document':(await conn[_0x54259e(0x84)](thumb))[_0x54259e(0x81)],'fileName':'‎\x20','mimetype':td},{'upload':conn[_0x54259e(0x89)]}),template=generateWAMessageFromContent(m[_0x54259e(0x85)],{'viewOnceMessage':{'message':{'messageContextInfo':{'deviceListMetadata':{},'deviceListMetadataVersion':0x2},'interactiveMessage':proto[_0x54259e(0x7f)][_0x54259e(0x7e)]['create']({'body':proto['Message'][_0x54259e(0x7e)]['Body'][_0x54259e(0x87)]({'text':Styles(text,0x1)}),'footer':proto[_0x54259e(0x7f)]['InteractiveMessage'][_0x54259e(0x7c)][_0x54259e(0x87)]({'text':wm}),'header':proto[_0x54259e(0x7f)][_0x54259e(0x7e)]['Header'][_0x54259e(0x87)]({'hasMediaAttachment':![],...media}),'nativeFlowMessage':proto[_0x54259e(0x7f)][_0x54259e(0x7e)][_0x54259e(0x86)][_0x54259e(0x87)]({'buttons':[{'name':_0x54259e(0x8f),'buttonParamsJson':JSON[_0x54259e(0x88)]({'title':'Klik\x20Disini\x20⎙','sections':sakkarin_ea})},{'name':'cta_url','buttonParamsJson':JSON['stringify']({'display_text':'Channel\x20WhatsApp','url':_0x54259e(0x80),'merchant_url':_0x54259e(0x80)})}]}),'contextInfo':{'mentionedJid':conn[_0x54259e(0x7d)](text),'forwardingScore':0x270f,'isForwarded':![],'mentionedJid':[m[_0x54259e(0x92)]],'externalAdReply':{'showAdAttribution':!![],'title':week+'\x20'+weton+',\x20'+date,'body':_0x54259e(0x8b),'description':wm,'mediaType':0x1,'thumbnailUrl':sknurls,'renderLargerThumbnail':!![],'sourceUrl':''}}})}}},{'userJid':conn[_0x54259e(0x8e)][_0x54259e(0x94)],'quoted':ftoko});function _0x2f30(){const _0x1500ad=['chat','NativeFlowMessage','create','stringify','waUploadToServer','983485IjfqWG','Library:\x20WiskeySockets/Baileys\x206.7.4','5017250uGDylZ','102XytVQA','user','single_select','632ABZQyE','3013290fxZdab','sender','key','jid','3Xuwirk','6278izFXva','1692225AukOjA','2024468ZIVgUu','Footer','parseMention','InteractiveMessage','Message','https://whatsapp.com/channel/0029VafjB0t7dmegQn0Bog2v','data','41167vBQBEH','message','getFile'];_0x2f30=function(){return _0x1500ad;};return _0x2f30();}function _0x4ed2(_0x65a987,_0x283fe4){const _0x2f300e=_0x2f30();return _0x4ed2=function(_0x4ed2ca,_0x504907){_0x4ed2ca=_0x4ed2ca-0x79;let _0x4b1bb2=_0x2f300e[_0x4ed2ca];return _0x4b1bb2;},_0x4ed2(_0x65a987,_0x283fe4);}return await conn['relayMessage'](m[_0x54259e(0x85)],template[_0x54259e(0x83)],{'messageId':template[_0x54259e(0x93)]['id']});
     }
     
 
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
        before,
        ...Object.keys(tags).map(tag => {
          return header.replace(/%category/g, tags[tag]) + '\n' + [
            ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
              return menu.help.map(help => {
                return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                  .replace(/%islimit/g, menu.limit ? '(Ⓛ)' : '')
                  .replace(/%isPremium/g, menu.premium ? '(Ⓟ)' : '')
                  .trim()
              }).join('\n')
            }),
            footer
          ].join('\n')
        }),
        after
      ].join('\n')
      text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      name,
      ucapan: ucapan(),
      level, limit, money, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    
//━━━━━━━━[ SETTINGS MENU ]━━━━━━━━//
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
     //conn.reply(m.chat, Styles(text.trim(), 1), fakes)
   /* conn.sendMessage(m.chat, {
text: Styles(text.trim(), 1),
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
title: `M A I N - M E N U`,
body: ``,
thumbnailUrl: thumb,
sourceUrl: `https://サッカリン`,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fakes})*/
const _0x4fdc20=_0x10ec;(function(_0x54df6e,_0x4f4b37){const _0x105b38=_0x10ec,_0x54e625=_0x54df6e();while(!![]){try{const _0x2a4ecd=-parseInt(_0x105b38(0xda))/0x1*(parseInt(_0x105b38(0xef))/0x2)+-parseInt(_0x105b38(0xf1))/0x3+parseInt(_0x105b38(0xe7))/0x4*(-parseInt(_0x105b38(0xdc))/0x5)+-parseInt(_0x105b38(0xe0))/0x6+-parseInt(_0x105b38(0xea))/0x7*(parseInt(_0x105b38(0xf3))/0x8)+-parseInt(_0x105b38(0xe1))/0x9+parseInt(_0x105b38(0xdd))/0xa*(parseInt(_0x105b38(0xf5))/0xb);if(_0x2a4ecd===_0x4f4b37)break;else _0x54e625['push'](_0x54e625['shift']());}catch(_0x445466){_0x54e625['push'](_0x54e625['shift']());}}}(_0x326f,0x8de40));function _0x326f(){const _0x210919=['getFile','1976iwNStq','user','5fWbauk','86470GlCZkc','data','stringify','1733958RFbtPF','5776731EntQTJ','waUploadToServer','Channel\x20WhatsApp','Header','InteractiveMessage','key','1117052nOSbsi','trim','Message','21iooMCd','https://whatsapp.com/channel/0029VafjB0t7dmegQn0Bog2v','message','relayMessage','Body','166arawxE','jid','1629654rTQAyX','chat','923568YZLDjn','create','3619EshtQA'];_0x326f=function(){return _0x210919;};return _0x326f();}function _0x10ec(_0x3c4126,_0x410013){const _0x326f0f=_0x326f();return _0x10ec=function(_0x10ec89,_0x7b8198){_0x10ec89=_0x10ec89-0xd9;let _0x3612a0=_0x326f0f[_0x10ec89];return _0x3612a0;},_0x10ec(_0x3c4126,_0x410013);}let media=await prepareWAMessageMedia({'document':(await conn[_0x4fdc20(0xd9)](thumb))[_0x4fdc20(0xde)],'fileName':wm,'mimetype':td},{'upload':conn[_0x4fdc20(0xe2)]}),template=generateWAMessageFromContent(m[_0x4fdc20(0xf2)],{'viewOnceMessage':{'message':{'messageContextInfo':{'deviceListMetadata':{},'deviceListMetadataVersion':0x2},'interactiveMessage':proto[_0x4fdc20(0xe9)][_0x4fdc20(0xe5)][_0x4fdc20(0xf4)]({'body':proto[_0x4fdc20(0xe9)]['InteractiveMessage'][_0x4fdc20(0xee)]['create']({'text':Styles(text[_0x4fdc20(0xe8)](),0x1)}),'footer':proto[_0x4fdc20(0xe9)][_0x4fdc20(0xe5)]['Footer'][_0x4fdc20(0xf4)]({'text':wm}),'header':proto[_0x4fdc20(0xe9)][_0x4fdc20(0xe5)][_0x4fdc20(0xe4)][_0x4fdc20(0xf4)]({'hasMediaAttachment':![],...media}),'nativeFlowMessage':proto[_0x4fdc20(0xe9)][_0x4fdc20(0xe5)]['NativeFlowMessage']['create']({'buttons':[{'name':'cta_url','buttonParamsJson':JSON[_0x4fdc20(0xdf)]({'display_text':_0x4fdc20(0xe3),'url':_0x4fdc20(0xeb),'merchant_url':_0x4fdc20(0xeb)})}]}),'contextInfo':{'mentionedJid':conn['parseMention'](text),'forwardingScore':0x270f,'isForwarded':![],'externalAdReply':{'showAdAttribution':!![],'title':week+'\x20'+weton+',\x20'+date,'body':'Library:\x20WiskeySockets/Baileys\x206.7.4','description':wm,'mediaType':0x1,'thumbnailUrl':sknurls,'renderLargerThumbnail':!![],'sourceUrl':''}}})}}},{'userJid':conn[_0x4fdc20(0xdb)][_0x4fdc20(0xf0)],'quoted':m});return await conn[_0x4fdc20(0xed)](m[_0x4fdc20(0xf2)],template[_0x4fdc20(0xec)],{'messageId':template[_0x4fdc20(0xe6)]['id']});
} catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.register = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

//━━━━━━━━[  JANGAN DI UBAH  ]━━━━━━━━//
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Selamat DiniHari"
  if (time >= 4) {
    res = "Selamat Pagi"
  }
  if (time > 10) {
    res = "Selamat Siang"
  }
  if (time >= 15) {
    res = "Selamat Sore"
  }
  if (time >= 18) {
    res = "Selamat Malam"
  }
  return res
}