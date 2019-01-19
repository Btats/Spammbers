
// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'chat');
  if (!channel) return;
  channel.send(`**Saluٌte
Your In a Big Society :hearts: -
-        Games Soceity :rt: **
`);
});
// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login("NTM2MDE3MTM3ODA2ODY4NDky.DyQlbg.30lgxzVSMyvGX90KZdEwCiijEig");
