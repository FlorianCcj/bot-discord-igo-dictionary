// * une commande ou quand tu tappes le debut d un mot (categorie ou forme) et il t affiche tout les mots commencant par ...

const { MessageEmbed } = require('discord.js');

const utils = require('../utils/utils');

function search(msg, config) {

  const pattern = utils.remove_two_first_word(msg.content);
  let result = [];
  let dico = Object.keys(config.DICTIONARY)
  dico.sort();
  result = dico
    .filter(key => key.indexOf(pattern) == 0)
    .join('\n')
  ;
  result = result == '' ? 'empty' : result;

  const embed = new MessageEmbed()
    .setDescription(`My super search: ${pattern}`)
    .addField('Result', result)
    .setFooter(config.FOOTER_TEXT)
  ;

  msg.channel.send(embed);
}

module.exports = {
  search
};
