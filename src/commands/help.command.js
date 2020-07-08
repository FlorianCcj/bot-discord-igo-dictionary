// * une commande permettant d expliquer qu est ce que c est que ce bot

const { MessageEmbed } = require('discord.js');

function print_help(msg, config) {

  const cmd_message = ''
  + '-------------------\n'
  + 'Help: ' + config.PREFIX + ' (-h,-?,-help,--h,--?,--help)`\n'
  + '-------------------\n'
  + `- ${config.PREFIX} def <nom de la form>: affiche la definition de la forme\n`
  + `- ${config.PREFIX} cat: affiche la liste des categorie\n`
  + `- ${config.PREFIX} cat <nom de la categorie>: affiche tout le mot de la categorie\n`
  + `- ${config.PREFIX} search <pattern>: recherche d un pattern parmi le dictionaire\n`
  ;

  const embed = new MessageEmbed()
    .setDescription('My super Help')
    .addField('Command', cmd_message)
    .setFooter(config.FOOTER_TEXT)
  ;


/**
    + '- launch challenge: `' + config.COMMANDS_PHRASES.challenge_phrase + '` ou
 `' + config.PREFIX + ' fight`\n'                                               
    + '- resign challenge: `' + config.COMMANDS_PHRASES.resign_phrase + '` ou `'
 + config.PREFIX + ' resign`\n'                                                 
    + '-'.repeat(2 * config.DREADNOUGHT_NAME.length) + '\n'                     
    + config.DREADNOUGHT_NAME + '\n'                                            
    + '-'.repeat(2 * config.DREADNOUGHT_NAME.length) + '\n'
    + '- win challenge: `' + config.COMMANDS_PHRASES.dreadnought_win_phrase + '$
 ou `' + config.PREFIX + ' resign` + <mention du perdant>\n'
    + '- lose challenge: `' + config.COMMANDS_PHRASES.dreadnought_lose_phrase +
'` ou `' + config.PREFIX + ' lose`\n'
    + 'the lose challenge command have to be done by the winner after having th$
 ' + config.DREADNOUGHT_NAME + ' group\n'
    + '----------\n'
    + 'Admin\n'
    + '----------\n'
    + '- init phase 1: `' + config.PREFIX + ' init 1`\n'
    + '- init phase 2: `' + config.PREFIX + ' init 2`\n'
    + '- set a ot message: `' + config.PREFIX + ' set <pwd> <message_id> <conte$
t>`\n'
  ;

 */

  msg.channel.send(embed);
}

module.exports = {
  print_help
};
