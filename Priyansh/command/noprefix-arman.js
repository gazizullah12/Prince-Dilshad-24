const fs = require("fs");
module.exports.config = {
	name: "arman",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "tea",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("@Arman")==0 || event.body.indexOf("Arman")==0 || event.body.indexOf("ARMAN")==0 || event.body.indexOf("arman")==0) {
		var msg = {
				body: "𝗛𝗲 𝗶𝘀 𝗕𝗲𝘀𝘁 𝗙𝗿𝗶𝗲𝗻𝗱 𝗢𝗳 𝗠𝘆 𝗕𝗼𝘀𝘀 𝐏𝐫𝐢𝐧𝐜𝐞 𝐃𝐢𝐥𝐬𝐡𝐚𝐝 \n 💞 \n 🌹 Jibran Khan 😘♥️🌹",
				attachment: fs.createReadStream(__dirname + `/noprefix/arman.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍿", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }