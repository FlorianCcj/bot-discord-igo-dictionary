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

  const embed = new MessageEmbed().setDescription(`My super search: ${pattern}`);

  const result_length = result.length;
  const max_field_size = 1024;

  if (result_length > max_field_size) {
    let result_reading_index = 0;
    while (result_reading_index < result_length) {
      // todo le mettre dans une fonction
      const tmp_result_loop = result.slice(result_reading_index, result_reading_index + 1024);
      const last_return_on_result = tmp_result_loop.lastIndexOf('\n');
      const result_loop = result.slice(result_reading_index, result_reading_index + last_return_on_result);
      result_reading_index += last_return_on_result;

      if (result_loop) {
        embed.addField('Result', result_loop);
      } else {
        result_reading_index = result_length;
      }
    }
  } else {
    embed.addField('Result', result);
  }

  embed.setFooter(config.FOOTER_TEXT);

  msg.channel.send(embed);
}

module.exports = {
  search
};
