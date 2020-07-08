const category = require('../commands/category.command');
const dictionary = require('../commands/dictionary.command');
const help = require('../commands/help.command');
const search = require('../commands/search.command');
const utils = require('../utils/utils');

module.exports = async (client, msg) => {
  let print_help = true;
  if (msg.author.bot) {
    return;
  }
  const { config } = client;

  console.log(msg.content);

  if (
    msg.content.startsWith(`${config.PREFIX} search`)
    || msg.content.startsWith(`${config.PREFIX} s`)
  ) {
    search.search(msg, config);
    print_help = false;
  } else if (
    msg.content.startsWith(`${config.PREFIX} cat`)
    || msg.content.startsWith(`${config.PREFIX} c`)
  ) {
    category.find_cat(msg, config);
    print_help = false;
  } else if (
    msg.content.startsWith(`${config.PREFIX} def`)
    || msg.content.startsWith(`${config.PREFIX} d`)
  ) {
    dictionary.find_def(msg, config);
    print_help = false;
  }

  if (
    print_help
    && msg.content.startsWith(`${config.PREFIX}`)
    || msg.content.startsWith(`${config.PREFIX} -h`)
    || msg.content.startsWith(`${config.PREFIX} -help`)
    || msg.content.startsWith(`${config.PREFIX} -?`)
    || msg.content.startsWith(`${config.PREFIX} --h`)
    || msg.content.startsWith(`${config.PREFIX} --?`)
    || msg.content.startsWith(`${config.PREFIX} --help`)
  ) {
    help.print_help(msg, config);
  }
};
