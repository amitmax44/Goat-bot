module.exports = {
 config: {
   name: "owner",
   version: "1.0",
   author: "Amit",
   countDown: 5,
   role: 0,
   category: "owner"
 },

 onStart: async function () { },
 onChat: async function ({ event, message, getLang }) {
   if (event.body && event.body.toLowerCase() === "owner") {
     return message.reply({
       body: 
          𓀬 ᴏᴡɴᴇʀ ɪɴꜰᴏ 𓀬

          ~ɴᴀᴍᴇ: ᴀᴍɪᴛ ᴍᴀx
          ~ᴄʟᴀꜱꜱ: ɪɴᴛᴇʀ 1ꜱᴛ
          ~ɢʀᴏᴜᴘ: ᴀᴄᴄᴏᴜɴᴛɪɴɢ
          ~ɢᴇɴᴅᴇʀ: ᴍᴀʟᴇ
          ~ʙɪʀᴛʜᴅᴀʏ: 18-05-2006
          ~ʀᴇʟɪɢɪᴏɴ: ʜɪɴᴅᴜ
          ~ʀᴇʟᴀᴛɪᴏɴꜱʜɪᴘ: ꜱɪɴɢʟᴇ
          ~ʜᴏʙʙʏ: ꜰʟɪʀᴛɪɴɢ 😗
          ~ʜᴇɪɢʜᴛ: 5.6
          ~ᴀᴅᴅʀᴇꜱꜱ: ᴋʜᴏᴋꜱʜ , ᴋᴜꜱʜᴛɪᴀ
          ~ɪɴꜱᴛᴀ: amitmax44 
 Have a great day!\n Creator: https://www.facebook.com/share/1ADHjjZ4iY/`, attachment: await global.utils.getStreamFromURL(""),
     });
   }
 }
};
