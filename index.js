const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
const prefix = "-";
const cyberTime = Date.parse("19 Nov 2020");
const wowTime = Date.parse("27 Oct 2020");

const calculator = function timeCoverter(arg) {
  let temp = new Date();
  let msgTime = Date.parse(temp);
  nowTime = (gameTime - msgTime) / 1000;
  this.days = Math.floor(nowTime / 3600 / 24);
  this.hours = Math.floor(nowTime / 3600) % 24;
  this.minutes = Math.floor(nowTime / 60) % 60;
  this.seconds = Math.floor(nowTime) % 60;
};

client.on("message", function (message) {
  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);

  const args = commandBody.split(" ");

  const command = args.shift().toLowerCase();

  if (command === "cyber") {
    gameTime = cyberTime;
    calculator(command);
    message.reply(
      `Cyberpunk\'ın gelmesine ${days} Gün, ${hours} Saat, ${minutes} Dakika, ${seconds} Saniye var. Ahanda burda öyle yazıyor. https://tirnoch.github.io/countdown-cyber/ `
    );
  } else if (command === "wow") {
    gameTime = wowTime;
    calculator(command);
    message.reply(
      `Shadowlands\'in gelmesine ${days} Gün, ${hours} Saat, ${minutes} Dakika, ${seconds} Saniye var. Ahanda burda öyle yazıyor. https://tirnoch.github.io/countdown-wow/ `
    );
  }
});

client.login(config.BOT_TOKEN);
