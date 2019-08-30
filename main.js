const { Client } = require("discord.js");
const client = new Client({ disableEveryone: true });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (msg.content === "ping") msg.channel.send("Pong!");
  if (msg.content === "everyone")
    msg.channel.send("@everyone Salut !!", { disableEveryone: false });
  if (msg.content === "noeveryone")
    msg.channel.send("@everynone 'not everynone) !");
});

client.login("NTgwMTM4NzgwNDQ3NzM1ODA4.XWlqbA.wio1tLk6XL6VRCnBgucIIIl9eDk");
