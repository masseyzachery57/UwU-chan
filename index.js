const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();
const fs = require("fs")

client.login(config.token);

client.on('ready', () => {
    console.log(`Logged in as: ${client.user.tag}`);
});

client.on('disconnect', () => {
    console.log('Disconnected, check your internet connection.');
});

const prefix = 'u.'; 


client.on('message', message => {

    if (message.content.startsWith(prefix) && !(message.author.bot)) {

        rand = Math.floor(((Math.random() + 1) * 3) - 2);

        if (message.content == 'u.bg') {
            message.channel.send({
                files: ['./images/bg.jpg']
            });
        } else if (message.content == 'u.kaori') {
            message.channel.send({
                files: ['./images/kaori.png']
            });
        } else if (message.content == 'u.happy') {
            message.channel.send({
                files: ['./images/happy' + rand + '.png']
            });
        } else if (message.content == 'u.angry') {
            message.channel.send({
                files: ['./images/angry' + rand + '.png']
            });
        } else if (message.content == 'u.cry') {
            message.channel.send({
                files: ['./images/cry' + rand + '.png']
            });
        } else if (message.content == 'u.pout') {
            message.channel.send({
                files: ['./images/pout' + rand + '.png']
            });
        } else if (message.content == 'u.surprised') {
            message.channel.send({
                files: ['./images/surprised' + rand + '.png']
            });
        } else if (message.content == 'u.haruhi') {
            message.channel.send({
                files: ['./images/haruhi.png']
            });
        }
        else try {
            const arrayOfImages = fs.readdirSync("./images")
            console.log(arrayOfFiles)
            var gudMeme = [];
            var x = 0;
            arrayOfImages.forEach((meme) => {
                if (meme.includes(message.content)) {
                    gudMeme[x] = meme[0];   //most likely place for it to break, as meme is 50/50 not an array i think
                    x = x + 1;
                }
            });
            var temperature = rand % gudMeme.length;
            message.channel.send({
                files: ['./images/' + gudMeme[temperature]]
            });
        } catch(e) {
            console.log(e)
        }
    }
});
