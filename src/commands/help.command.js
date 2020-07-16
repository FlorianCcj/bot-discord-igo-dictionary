// * une commande permettant d expliquer qu est ce que c est que ce bot

const { MessageEmbed } = require('discord.js');

function print_help(msg, config) {

  const cmd_message = ''
  + '-------------------\n'
  + 'Help: ' + config.PREFIX + ' (-h,-?,-help,--h,--?,--help)`\n'
  + '-------------------\n'
  + `- ${config.PREFIX} def <nom de la form>:  affiche la definition de la forme\n`
  + `- ${config.PREFIX} cat: affiche la liste des categorie\n`
  + `- ${config.PREFIX} cat <nom de la categorie>: affiche tout les mots de la categorie\n`
  + `- ${config.PREFIX} search: affiche l ensemble des definitions du dictionaires\n`
  + `- ${config.PREFIX} search <pattern>: recherche un pattern parmi le dictionaire\n`
  ;

  const embed = new MessageEmbed()
    .setDescription('Igo dictionary helper')
    .addField('Command', cmd_message)
    .setFooter(config.FOOTER_TEXT)
  ;

  msg.channel.send(embed);
}

module.exports = {
  print_help
};
