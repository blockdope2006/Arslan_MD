const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// 🔧 Utility Function
const stringToBool = (str) => str.toLowerCase() === 'true';

// ⚡ ARSLAN-MD CONFIGURATION - ULTRA STYLISH WITH DESCRIPTIONS
module.exports = {
    // 🔐 SESSION & AUTHENTICATION
    SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUtkekgxalRQdS9MSHNQVWMrT2J0QmFlUHN0eERLVFMxVUoxS0tCcW5sND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM0FkSUM1b09SQ0Y4NzhCaXFMMlo2aTMvSUdmUGR4MmdRcC81SXRhRVprVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvSnN1SzhpbGxOMERlai9sRW9sVEVGaDQ1ZlM4NUdjandwV0xxdU5FNFhrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5SWw0SWxVWmF3TXBHbU9ScGE4Qmh4RTZ6K0ZBNzBLMGpxT0NMQVBRT0RJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVNZVZwUXVWOFJqczFET2wvbG9qeWtzbE5UL2pZWnNmSXJHYnhDR2VJMFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNlbGlMNkRPakFScjhGZktRR0k5dW1jVjVWc0J0RysxV1lVTVhWbHJabDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUE5MGxXajNHY3JYcDdJbVhPUnh3cWtUMEJXdU5uRUtqTWg4alIxYS9XST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZElZZjhMSFM1RlNVYVhUdTlTV0R1MElyNFZnMndvMHVsSVMyaHRaNXlBVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikt4VzU3K3NNRVNyTm9WeGpDaGp3ZzQzWWpyV3oyUXpEd00vYjV6ckVhaWlvdHNPVU5zZ3Q5S2hpZW1abVB4VW9ZOGFnVTZBSDNDRkNBNkc1S3AvSWpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAwLCJhZHZTZWNyZXRLZXkiOiJxbThsNlRNYU1QRDhieGxTMW1sVEdlV1gxalNEUFg3cGhPZDJGdDFxMkMwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzc2ODU5MzY0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDNkIzOURFNjlFRjRERjYzMkIzNUI2QUYzNUJFQTdEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjQ5NTYxNjl9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzc2ODU5MzY0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDMEE3NkE5NTc2OUQwMzQwMDk2MjY0MjJBNUE5QUFBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjQ5NTYxNzB9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Il9wNnpZR1JPVDAybzNYb0ZiM2JuM3ciLCJwaG9uZUlkIjoiNmU5OGQ2YzQtZTk3NS00NjcyLWFkYjYtNDQ1ODIyZGE5MTY0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVqcWNBYWV1UmtxMERqTG00TlhQQndtYXM2Zz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJQXVnSWJFemhMN2YvOXQ3blNROG9NT2EyWFk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTDFaS1ZHTlMiLCJtZSI6eyJpZCI6Ijk0Nzc2ODU5MzY0OjY0QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjM2NjEwMzE4NzcwMzI3OjY0QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT24zMWdNUStxL015UVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiOXpBWHVMa0M1K2RIYU50dSszOUs1SW5mYmszZ3B4WEQ4akgwUVhoMUcxTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTFZwaWxZSDZVbFd6THBBU1daRm5JWFVGQzFYU0FMYTNKMy80Kzlrb2JnWWp4NDNXYVk3emtzU2tLSDV2bkdVdEFFRnJDWnkzUlVVayt1aElVMWlkQXc9PSIsImRldmljZVNpZ25hdHVyZSI6IjR3MytISS8xMmFId2xXN0R5QTNZQ09xMnJOK1NPL2IvejE1WlFnOFpwemZUZDVaekxJUllEaWsrc1NjTitkZC9GSVhzWnZaWlhRaHlPVWc1cWZBSGpBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NzY4NTkzNjQ6NjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZmN3RjdpNUF1Zm5SMmpiYnZ0L1N1U0ozMjVONEtjVncvSXg5RUY0ZFJ0VCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUFnZ0kifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzY0OTU2MTY4LCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFZNiJ9", // Your WhatsApp session ID - keep this secure!

    // 🎯 SECURITY & MODERATION
    DELETE_LINKS: stringToBool(process.env.DELETE_LINKS || "true"), // Auto delete non-whitelisted links
    LINK_WHITELIST: "youtube.com,github.com", // Allowed domains - separate with commas
    LINK_WARN_LIMIT: 3, // Number of warnings before taking action
    LINK_ACTION: "kick", // Action for link violators: "kick", "mute", or "none"
    ANTI_BAD: stringToBool(process.env.ANTI_BAD || "false"), // Block bad words in group
    ANTI_LINK: stringToBool(process.env.ANTI_LINK || "true"), // Prevent sharing links in group
    ANTI_BOT: stringToBool(process.env.ANTI_BOT || "true"), // Block other bots from group
    ANTI_DELETE: stringToBool(process.env.ANTI_DELETE || "true"), // Prevent message deletion in group
    ANTI_VV: stringToBool(process.env.ANTI_VV || "true"), // Anti-view once feature
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", // Path for anti-delete logs

    // 🤖 BOT CORE FEATURES
    PREFIX: process.env.PREFIX || ".", // Bot command prefix (e.g., .,!,/,#)
    BOT_NAME: process.env.BOT_NAME || "✦[ᴀʀꜱʟᴀɴ-ᴍᴅ]✦", // Your bot's display name
    MODE: process.env.MODE || "public", // Bot mode: "public" or "private"
    chatbotEnabled: stringToBool(process.env.chatbotEnabled || "false"), // Enable AI chatbot feature
    version: process.env.version || "4.0.0", // Bot version number

    // 💬 MESSAGE HANDLING
    READ_MESSAGE: stringToBool(process.env.READ_MESSAGE || "false"), // Mark messages as read automatically
    READ_CMD: stringToBool(process.env.READ_CMD || "false"), // Read command messages only
    AUTO_REPLY: stringToBool(process.env.AUTO_REPLY || "false"), // Auto-reply to messages

    // 🎭 REACTIONS & INTERACTIONS
    CUSTOM_REACT: stringToBool(process.env.CUSTOM_REACT || "false"), // Enable custom reactions
    CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🔥,❤️‍🩹,❤️,🩷,🧡,💛,💚,💙,🩵,💜,🤎,🖤,🩶,🤍", // Emojis for custom reactions
    AUTO_REACT: stringToBool(process.env.AUTO_REACT || "false"), // Auto-react to messages
    HEART_REACT: stringToBool(process.env.HEART_REACT || "false"), // Auto-heart react to messages
    OWNER_REACT: stringToBool(process.env.OWNER_REACT || "true"), // React to owner's messages

    // 👑 OWNER SETTINGS
    OWNER_NUMBER: process.env.OWNER_NUMBER || "923237045919", // Bot owner's WhatsApp number
    OWNER_NAME: process.env.OWNER_NAME || "✦ᴀʀꜱʟᴀɴ-ᴍᴅ✦", // Bot owner's display name
    king: process.env.king || "ᴀʀꜱʟᴀɴ-ᴍᴅ", // Bot king/developer name
    DEV: process.env.DEV || "923237045919", // Developer contact number

    // 🎨 MEDIA & APPEARANCE
    STICKER_NAME: process.env.STICKER_NAME || "✦ᴀʀꜱʟᴀɴ-ᴍᴅ✦", // Default sticker pack name
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/16i1l7.jpg", // Alive command image URL
    DESCRIPTION: process.env.DESCRIPTION || "> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʀꜱʟᴀɴ-ᴍᴅ ᴛᴇᴄʜ 🇵🇰*", // Bot description

    // 📱 STATUS FEATURES
    AUTO_STATUS_SEEN: stringToBool(process.env.AUTO_STATUS_SEEN || "true"), // Auto-see status updates
    AUTO_STATUS_REPLY: stringToBool(process.env.AUTO_STATUS_REPLY || "false"), // Auto-reply to status
    AUTO_STATUS_REACT: stringToBool(process.env.AUTO_STATUS_REACT || "true"), // Auto-react to status
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*🎉👀 Status Seen by ✦ᴀʀꜱʟᴀɴ-ᴍᴅ 🚀🔥✦*", // Status reply message
    CURRENT_STATUS: stringToBool(process.env.CURRENT_STATUS || "true"), // Show current status

    // 🚀 ADVANCED AUTOMATION
    AUTO_VOICE: stringToBool(process.env.AUTO_VOICE || "false"), // Convert text to voice automatically
    AUTO_STICKER: stringToBool(process.env.AUTO_STICKER || "false"), // Convert images to stickers automatically
    AUTO_TYPING: stringToBool(process.env.AUTO_TYPING || "true"), // Show typing indicator
    AUTO_RECORDING: stringToBool(process.env.AUTO_RECORDING || "false"), // Show recording indicator
    FAKE_RECORDING: stringToBool(process.env.FAKE_RECORDING || "false"), // Fake recording indicator
    FAKE_TYPING: stringToBool(process.env.FAKE_TYPING || "false"), // Fake typing indicator
    ALWAYS_ONLINE: stringToBool(process.env.ALWAYS_ONLINE || "true"), // Show bot as always online
    PUBLIC_MODE: stringToBool(process.env.PUBLIC_MODE || "true"), // Public or private bot mode

    // 💌 BOT MESSAGES
    LIVE_MSG: process.env.LIVE_MSG || "> 🤖 ʙᴏᴛ ɪs sᴘᴀʀᴋɪɴɢ ᴀᴄᴛɪᴠᴇ ᴀɴᴅ ᴀʟɪᴠᴇ\n\nᴋᴇᴇᴘ ᴜsɪɴɢ ✦ᴀʀꜱʟᴀɴ-ᴍᴅ✦ ғʀᴏᴍ ᴀʀꜱʟᴀɴ-ᴍᴅ ᴛᴇᴄʜ ɪɴᴄ⚡\n\n*© ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ*\n> 🌐 *ɢɪᴛʜᴜʙ :* github.com/Arslan-MD/Arslan_MD", // Alive message

    // 🎊 STARTUP MESSAGE
    START_MSG: process.env.START_MSG || `*Hᴇʟʟᴏ ᴛʜᴇʀᴇ ᴀʀꜱʟᴀɴ-ᴍᴅ ᴄᴏɴɴᴇᴄᴛᴇᴅ! 👋🏻* 

   *ᴋᴇᴇᴘ ᴏɴ ᴜsɪɴɢ ᴀʀꜱʟᴀɴ-ᴍᴅ 🇵🇰* 

> 😘Joɪɴ ᴡʜᴀᴛsᴀᴘᴘ ᴄʜᴀɴɴᴇʟ (ᴀ ᴍᴜsᴛ): ⤵️  
* *~_https://whatsapp.com/channel/0029VarfjW04tRrmwfb8x306_~*

> ♻️sᴜʙsᴄʀɪʙᴇ ʏᴛ ᴄʜᴀɴɴᴇʟ ғᴏʀ ᴛᴜᴛᴏʀɪᴀʟs
* *~_https://youtube.com/@arslanmdofficial_~*

    🫣- *ʏᴏᴜʀ ʙᴏᴛ ᴘʀᴇғɪx: ➡️[ . ]*
> - ʏᴏᴜ ᴄᴀɴ ᴄʜᴀɴɢᴇ ᴜʀ ᴘʀᴇғɪx ᴜsɪɴɢ ᴛʜᴇ .ᴘʀᴇғɪx ᴄᴏᴍᴍᴀɴᴅ

> ᴅᴏɴᴛ ғᴏʀɢᴇᴛ ᴛᴏ sʜᴀʀᴇ, sᴛᴀʀ &ғᴏʀᴋ ᴛʜᴇ ʀᴇᴘᴏ ⬇️ 
* *~_https://github.com/Arslan-MD/Arslan_MD_~*

> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʀꜱʟᴀɴ-ᴍᴅ ☣️` // Bot startup message
};

// 💫 ARSLAN-MD STYLE GUIDE
global.ARS_STYLE = {
    EMOJIS: {
        SUCCESS: "✅", // Success operation emoji
        ERROR: "❌", // Error operation emoji  
        WARNING: "⚠️", // Warning message emoji
        LOADING: "⏳", // Loading indicator emoji
        SPARKLE: "✨", // Sparkle effect emoji
        ROCKET: "🚀", // Rocket/speed emoji
        FIRE: "🔥", // Fire/hot emoji
        CROWN: "👑" // Crown/royalty emoji
    },
    COLORS: {
        PRIMARY: "#FF0000", // Primary brand color
        SECONDARY: "#00FF00", // Secondary brand color  
        ACCENT: "#0000FF" // Accent brand color
    }
};
