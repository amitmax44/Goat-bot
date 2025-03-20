const { GoatWrapper } = require('fca-liane-utils');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
	config: {
		name: "owner",
		aliases: ["info","inf"],
		author: "Amit Max",
		role: 0,
		shortDescription: " ",
		longDescription: "",
		category: "admin",
		guide: "{pn}"
	},

	onStart: async function ({ api, event }) {
		try {
			const ownerInfo = {
				name: 'ᴀᴍɪᴛ ᴍᴀx ',
				class: 'ɪɴᴛᴇʀ 1ꜱᴛ ',
				group: 'ᴀᴄᴄᴏᴜɴᴛɪɴɢ',
				gender: 'ᴍᴀʟᴇ',
				Birthday: '18-05-2006',
				religion: 'ʜɪɴᴅᴜ',
				hobby: 'ꜰʟɪʀᴛɪɴɢ😗',
				Fb: 'https://www.facebook.com/share/1FV6eJ1iY1/',
				Relationship: 'ꜱɪɴɢʟᴇ ',
				Height: '5.6',
				Address: 'ᴋʜᴏᴋꜱʜ , ᴋᴜꜱʜᴛɪᴀ',
				Instagram: 'amitmax44',
			};

			const bold = 'https://imgur.com/a/UFN9esj.mp4';
			const tmpFolderPath = path.join(__dirname, 'tmp');

			if (!fs.existsSync(tmpFolderPath)) {
				fs.mkdirSync(tmpFolderPath);
			}

			const videoResponse = await axios.get(bold, { responseType: 'arraybuffer' });
			const videoPath = path.join(tmpFolderPath, 'owner_video.mp4');

			fs.writeFileSync(videoPath, Buffer.from(videoResponse.data, 'binary'));

			const response = `
𓀬 ᴏᴡɴᴇʀ ɪɴꜰᴏ 𓀬 \n
 ~ɴᴀᴍᴇ: ${ownerInfo.name}
 ~ᴄʟᴀꜱꜱ: ${ownerInfo.class}
 ~ɢʀᴏᴜᴘ: ${ownerInfo.group}
 ~ɢᴇɴᴅᴇʀ: ${ownerInfo.gender}
 ~ʙɪʀᴛʜᴅᴀʏ: ${ownerInfo.Birthday}
 ~ʀᴇʟɪɢɪᴏɴ: ${ownerInfo.religion}
 ~ʀᴇʟᴀᴛɪᴏɴꜱʜɪᴘ: ${ownerInfo.Relationship}
 ~ʜᴏʙʙʏ: ${ownerInfo.hobby}
 ~ʜᴇɪɢʜᴛ: ${ownerInfo.Height}
 ~ꜰʙ: ${ownerInfo.Fb}
 ~ᴀᴅᴅʀᴇꜱꜱ: ${ownerInfo.Address}
 ~ɪɴꜱᴛᴀɢʀᴀᴍ: ${OwnerInfo.Instagram}
			`;

			await api.sendMessage({
				body: response,
				attachment: fs.createReadStream(videoPath)
			}, event.threadID, event.messageID);

			fs.unlinkSync(videoPath);

			api.setMessageReaction('😘', event.messageID, (err) => {}, true);
		} catch (error) {
			console.error('Error in ownerinfo command:', error);
			return api.sendMessage('An error occurred while processing the command.', event.threadID);
		}
	}
};

const wrapper = new GoatWrapper(module.exports);
		wrapper.applyNoPrefix({ allowPrefix: true });
