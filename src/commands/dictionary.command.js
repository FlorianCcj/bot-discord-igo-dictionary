// * une commande avec le nom de la forme pour afficher la description

const { MessageEmbed, MessageAttachment } = require('discord.js');
const file = new MessageAttachment('../assets/discordjs.png');

const dictionary = require('../utils/dictionary.utils');
const utils = require('../utils/utils');

function find_def(msg, config) {

  const word = utils.remove_two_first_word(msg.content);
  let def = dictionary.return_def(word, config);
  const image = dictionary.return_image(word, config);
  const thumbnail = dictionary.return_thumbnail(word, config);
  let cat = 'Nothing here';
  
  if (def === undefined || def === '') {
    def = 'This word is not defined sorry!';
  } else {
    cat = dictionary.return_cat(word, config).join(', ');
  }
  if (cat === undefined || cat === '') {
    cat = 'Nothing here';
  }

  const embed = {
    description: word,
    fields: [
      {
        name: 'Definition',
			  value: def,
      },
      {
        name: 'Categories',
			  value: cat,
      },
    ],
    footer: {
      text: config.FOOTER_TEXT
    },
    thumbnail: {
      url: thumbnail
    },
    image: {
      url: image,
    },
  };

  msg.channel.send({ embed: embed });
}

module.exports = {
  find_def
};
