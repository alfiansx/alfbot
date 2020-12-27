const help = (prefix) => {
	return `> *Sticker Commands* <
command : *${prefix}sticker* or *${prefix}stiker*
desc : convert image/gif/video to sticker
usage : reply image/gif/video, or send image/gif/video with caption\n
command : *${prefix}sticker nobg* or *${prefix}stiker nobg*
desc : convert image to sticker while removing the background
usage : reply image, or send image with caption\n
command : *${prefix}toimg*
desc : convert sticker to image
usage : reply sticker\n
> *Others Commands* <
command : *${prefix}tts*
desc : convert text to speech/audio
usage : *${prefix}tts [cc] [text]*\nexample : *${prefix}tts ja On2-chan*\n
command : *${prefix}ocr*
desc : take the text in the picture
usage : reply image, or send image with caption\n
command : *${prefix}wait*
desc : search anime with image [ What Anime Is This/That ]
usage : reply image, or send image with caption\n
command : *${prefix}setprefix*
desc : replace prefix
usage : *${prefix}setprefix [text|optional]*\nexample : *${prefix}setprefix ?*
note : This command can only be used by the bot owner\n
> *Group Comands* <
command : *${prefix}linkgroup*
desc : take the group link
usage : just send the command\
note : can only be used when the bot becomes admin, and the one who sends the command is admin!\n
command : *${prefix}tagall*
desc : tags all group members including admins too
usage : just send the command
note : This command can be used if you are a group admin\n`
}

exports.help = help
