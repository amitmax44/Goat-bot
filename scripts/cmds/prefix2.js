module.exports = {
 config: {
   name: "prefix2",
   version: "1.0",
   author: "Amit",
   countDown: 5,
   role: 0,
   category: "prefix2"
 },

 onStart: async function () { },
 onChat: async function ({ event, message, getLang }) {
   if (event.body && event.body.toLowerCase() === "prefix") {
     return message.reply({
       body: `Hello!
       I'am 🌊Mizuhara Chizuru😘
🌟 My Prefix: [ . ]  
📜 How to get started:[ Bot ]  
➡️ Type *help to view all available commands.  

💬 Need Help ?  
👉 Feel free to ask!  

🚀 Have a great day!\n Creator: https://www.facebook.com/share/1ADHjjZ4iY/`, attachment: await global.utils.getStreamFromURL("https://imgur.com/a/0uMjhQ1.mp4"),
     });
   }
 }
};
