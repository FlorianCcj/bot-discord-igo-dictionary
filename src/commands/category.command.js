// * une commande avec une categorie affichant les formes liée a la categorie

const { MessageEmbed } = require('discord.js');

const category = require('../utils/category.utils');
const utils = require('../utils/utils');

function find_cat(msg, config) {

  const cat = utils.remove_two_first_word(msg.content);
  let words = category.get_word_from_category(cat, config);
  words.sort();
  let message = words.join('\n');
  let title = `Category: ${cat}`

  if (message == '') {
    message = category.get_all_categories(config).join('\n');
    title = 'Les catégories connu sont: ';
  }
  const embed = {
    fields: [
      {
        name: title,
			  value: message,
      }
    ],
    footer: {
      text: config.FOOTER_TEXT
    },
  };

  msg.channel.send({ embed: embed });
}

module.exports = {
  find_cat
};
