require('dotenv').config();

const Discord = require("discord.js");

const client = new Discord.Client()
const guild = new Discord.Guild();

// Head honchos
const luwaiwong = "392083955471613955"
const nams = "345242253532594176"
const armadillo = "429694692708319254"

let lastKickedMembers = [];

// Regular discord bot stuff

// On Login
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

// On new message
client.on("message", msg => {

    if (msg.content === "ping"){
        msg.reply("pong");
    }   else if (msg.content === "cock"){
        msg.reply("and balls");
    }   else if (msg.content === "suck"){
        msg.reply("my balls");
    }   else if (msg.content === "racism"){
        msg.reply("amen brotha");
    }   else if (msg.content === ".porn"){
        msg.reply("for you m'lady", {files: ["./images/no.png"]});
    }

    // Check for kick keyword
    if (msg.content.startsWith(".kick")){

        let userID;
        
        // Check if valid
        if (msg.mentions.members.first() ) {

            let user = msg.mentions.users.first();
                
            const member = msg.guild.member(user);

            msg.channel.send("Roles:");

            // List and record roles
            lastKickedMembers.push([user.id, ...member._roles])
            console.log(lastKickedMembers)
            var roleList = "";
            for (let i = 0; i < member._roles.length; i++) {
                roleList = roleList+"  |  "+msg.guild.roles.cache.get(member._roles[i]).name;
                
            }
            msg.channel.send(roleList);

            const target = msg.guild.members.cache.get(user.id);

            if (target.id == luwaiwong){
                msg.reply("fuck off idiot you can't kick me with my own bot");
            }   else {
                target.kick("lmao get shreked nerd").then(() => {
                    msg.reply('get fucked dumbass');
                }).catch (err => {
                    msg.reply('yo this dude is like god or something');
                    console.error(err);
                })
            }
           
        }   else {
            msg.reply("That name is not valid");
        }

    }
})

// On user join
client.on('guildMemberAdd', member => {
    let wasKickedMember = false;
    let kickedIndex = 0;
    for (let i = 0; i < lastKickedMembers.length; i++){
        if (member.id = lastKickedMembers[i][0]){
            wasKickedMember = true;
            kickedIndex = i;
            break;
        }
    }

    if (wasKickedMember) {
        for (let i = 1; i < lastKickedMembers[kickedIndex].length; i++){
            member.roles.add(lastKickedMembers[kickedIndex][i]);
        }
        lastKickedMembers[kickedIndex] = [0];
    }
});
// User presence stuff
const luwai = {
 
}



function GetPresence(){
    const user = client.users.fetch('392083955471613955');
    user.then((result) => {
        console.log(result.username);
        client.user.presence.status.
        console.log(result.presence.status);
        console.log(result.presence.activities.name);
    }).catch((err) => {
        
    });
}
exports.luwai = luwai;
client.login(process.env.DISCORDJS_BOT_TOKEN);