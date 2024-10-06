//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                    𝗠𝗔𝗡𝗨-𝗠𝗗  𝐁𝐎𝐓                                                 //
//                                                                                                      //
//                                         Ｖ：7.0                                                       //

//███╗░░░███╗░█████╗░███╗░░██╗██╗░░░██╗
//████╗░████║██╔══██╗████╗░██║██║░░░██║
//██╔████╔██║███████║██╔██╗██║██║░░░██║
//██║╚██╔╝██║██╔══██║██║╚████║██║░░░██║
//██║░╚═╝░██║██║░░██║██║░╚███║╚██████╔╝
//╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝░╚═════╝░

//███╗░░░███╗██████╗░
//████╗░████║██╔══██╗
//██╔████╔██║██║░░██║
//██║╚██╔╝██║██║░░██║
//██║░╚═╝░██║██████╔╝
//╚═╝░░░░░╚═╝╚═════╝░

//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : MANU-MD
//  * @author : Manul Official
//  * @youtube : https://www.youtube.com/@ManulOfficialTech
//  * @description : Manu-MD ,A Multi-functional whatsapp user bot.
//*
//*
//base by Manul Official
//GitHub: @manulofficial7
//WhatsApp: +94742274855
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@ManulOfficialTech
//   * Created By Github: manulofficial7.
//   * Credit To Manul Official
//   * © 2024 MANU-MD-V7.
// ⛥┌┤
// */

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "{"noiseKey":{"private":{"type":"Buffer","data":"AGNFZy8XlyafFeL2grXTIa+8vo6jmlxS1Ue9bZd2XF8="},"public":{"type":"Buffer","data":"LH8ojgf875qc9T78zmiWl8il5SxgJs0Rv7lc6ZkN/hQ="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"qGCTcXnAtDGiNYeukzVc3RYNPVSiKFabacSwM1CzrGI="},"public":{"type":"Buffer","data":"o3aWZ3iWmC94P+2RH1KLaZTShE1MFy0/KZ9uY4Tjix0="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"GKtdx+b+LsdeY6NsrkG7x7zAEstbqtEDyuNXfwirJXA="},"public":{"type":"Buffer","data":"R2TFN4PCy1am5lfvJ7UD2dJURlPRr+Cc6yUtK8yaShk="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"IL0KINGki2oZ15zoHeE/i4DYc5/AHbHkIzTsj5cxZ10="},"public":{"type":"Buffer","data":"h/7KAub+FVLNEycP59M0WlMpPLIt0fzABSFrcndMfQg="}},"signature":{"type":"Buffer","data":"RA0LG8kiqsJJG/1LyGVJd4/qsTkhJvS7f46q0yLvUInWUVVy63wVg0k74K9ta/fYVQXq7EY0di3Gwlyz8fHkAQ=="},"keyId":1},"registrationId":245,"advSecretKey":"KITLI3U2nTlZtq+g08MiK8IXZZr/8lu3/MJEh+eGUAs=","processedHistoryMessages":[{"key":{"remoteJid":"94785153782@s.whatsapp.net","fromMe":true,"id":"A6CADFA96BF0387C41C19E1730618309"},"messageTimestamp":1728180387},{"key":{"remoteJid":"94785153782@s.whatsapp.net","fromMe":true,"id":"6B2880052507246AD46F01A6521412AA"},"messageTimestamp":1728180387}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"deviceId":"MtFi5IkJRs-f8G9rIQ-WHA","phoneId":"837fb432-e570-453c-b45a-37b0a45217b8","identityId":{"type":"Buffer","data":"x1goWF2yQL/ebJY29nAvP5zcPvw="},"registered":true,"backupToken":{"type":"Buffer","data":"z0UFqumJVj19m/REPvifCEyf12g="},"registration":{},"pairingCode":"HFBT95DT","me":{"id":"94785153782:1@s.whatsapp.net"},"account":{"details":"CKGz7bwGEJThh7gGGAEgACgA","accountSignatureKey":"MmkfgpM9F/i9zkjPZETt5LaDPAQqaL85E1sP6b2NwC8=","accountSignature":"O1QfcxEkssf/8Oy+s25Cz+z8vzcldHUm0ezWGAh9TipUNwH1/P+Vv2cjZSloizIs+S3tNF2W6pyS+65YMy1sBA==","deviceSignature":"ETlArC3RtJZS/RCwkJsxksTsgUwvzOcNuq1quSbGBPzkcgmvqrblh0wK6zZEQgY85Q+kWwmL4ETop+f39DFcBg=="},"signalIdentities":[{"identifier":{"name":"94785153782:1@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BTJpH4KTPRf4vc5Iz2RE7eS2gzwEKmi/ORNbD+m9jcAv"}}],"platform":"android","lastAccountSyncTimestamp":1728180384,"myAppStateKeyId":"AAAAAH7P"}",
ALIVE_IMG : process.env.ALIVE_IMG || "https://telegra.ph/file/ef48cc8d2d26081f7d46a.jpg",
ALIVE_MSG : process.env.ALIVE_MSG || "Put your alive messege",
MENU_IMG : process.env.MENU_IMG || "https://telegra.ph/file/ef48cc8d2d26081f7d46a.jpg",
MODE : process.env.MODE || "public",    
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_BIO: process.env.AUTO_BIO || "false",
READ_CMD: process.env.READ_CMD || "true",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
MENU: process.env.MENU || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
ANTI_LINK: process.env.ANTI_LINK || "true",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
ANTI_DELETE: process.env.ANTI_DELETE || "true",
ALWAYS_ONLINE : process.env.ALWAYS_ONLINE || "true",
AUTO_TYPING : process.env.AUTO_TYPING || "true",
AUTO_RECORDING : process.env.AUTO_RECORDING || "true",
DELCHAT : process.env.DELCHAT || "pm",
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO,
};
