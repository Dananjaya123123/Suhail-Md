const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,sri lanka"


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://DARKSHAN:3000@cluster0.t1wsjlv.mongodb.net/ 
"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94758105765";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_30_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5LFxuICAgICAgICA3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxLFxuICAgICAgICA3NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNSxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDMzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTcwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjIwLFxuICAgICAgICA3NixcbiAgICAgICAgMTE3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAzNixcbiAgICAgICAgNTksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTMzLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA0MyxcbiAgICAgICAgODAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTU3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTksXG4gICAgICAgIDkxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQzLFxuICAgICAgICA1NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNCxcbiAgICAgICAgMjksXG4gICAgICAgIDE1LFxuICAgICAgICAzNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDgxLFxuICAgICAgICA2MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjE2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDMyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjI5LFxuICAgICAgICA5NSxcbiAgICAgICAgOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE2LFxuICAgICAgICA3MSxcbiAgICAgICAgNDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICA1NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDUwLFxuICAgICAgICA3MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwLFxuICAgICAgICAzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTA0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTExLFxuICAgICAgICA2OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzYsXG4gICAgICAgIDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNSxcbiAgICAgICAgODQsXG4gICAgICAgIDYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDkxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDg0LFxuICAgICAgICA5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTU2LFxuICAgICAgICA3NyxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI2LFxuICBcImFkdlNlY3JldEtleVwiOiBcImdMRVlQam9yRStxV3Zzc1FSdlRvdzFpYjRNK3N2SFgvYWNTeUpyVmlkWUE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImRmeElpY0ZnUS1LUkgtcFhnS0JJUXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2JiY2U2ZGYtYzZiYy00YTI0LWIyYTAtODIzMDFmYmRiMzE2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMixcbiAgICAgIDE5NyxcbiAgICAgIDUyLFxuICAgICAgMTAsXG4gICAgICAxNTIsXG4gICAgICAyNTIsXG4gICAgICAxMCxcbiAgICAgIDY2LFxuICAgICAgMTI4LFxuICAgICAgNzksXG4gICAgICAxNDUsXG4gICAgICA1MSxcbiAgICAgIDY5LFxuICAgICAgMTU1LFxuICAgICAgNDAsXG4gICAgICA3NCxcbiAgICAgIDU0LFxuICAgICAgMjAzLFxuICAgICAgMTQ0LFxuICAgICAgMTc5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzOCxcbiAgICAgIDY5LFxuICAgICAgMTM5LFxuICAgICAgMzQsXG4gICAgICAxNjUsXG4gICAgICAyMzUsXG4gICAgICAyNyxcbiAgICAgIDcsXG4gICAgICAxODIsXG4gICAgICAxNjIsXG4gICAgICAzMixcbiAgICAgIDIzOSxcbiAgICAgIDQ4LFxuICAgICAgMTg3LFxuICAgICAgODgsXG4gICAgICAyMzMsXG4gICAgICAyNDcsXG4gICAgICAxOTQsXG4gICAgICA1MixcbiAgICAgIDE5N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJESk1ZSlJXUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NTgxMDU3NjU6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZCD8J2arvCdmqvwnZq08J2aqyAtICDwnZCS8J2au/CdmqvwnZq78J2QlPCdkJIgIPCdkIrwnZqw8J2atPCdkIZcIixcbiAgICBcImxpZFwiOiBcIjExMzIzMjk4NzU3NDI4NzoyMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNWGprYkFCRU5md3pMUUdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlVwRXFCUThKc01mVWt1RlZXd0puZTU0WU4vWG5YL1VuTEtJVCtTTDIxQWc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWkxTVjRnZzlDVHRKWHJaS2RBenFmWnlFQ2JTMWl4b1NVc0h0T29ydkdlVXY1VG9mMU5mZFlOMlhyQVVqNW1lVVZQVGxiQWpYMFBOaDc1OTl0MVkrREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYUt4dVQ0VmE4bWhMdTJCY2YzTkp5QnNZUms0eGxkNW1ZaGFWUGw1TWJMck5iUG9qZDlYQndwT1FsZmtXZmZZcXdhbWJHVzNXV05mZHRxbDErdndxQmc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NTgxMDU3NjU6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwOTI0MjUwXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "DHANA",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
