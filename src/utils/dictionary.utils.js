const is_word_exist = (word, dictionnary) => undefined !== dictionnary[word];
function return_image(word, config) {
  if (!is_word_exist(word, config.DICTIONARY)) {
    return undefined
  }
  result = config.DICTIONARY[word][config.KEY['image']];
  return result === '' ? undefined : result;
}
function return_thumbnail(word, config) {
  if (!is_word_exist(word, config.DICTIONARY)) {
    return undefined
  }
  result = config.DICTIONARY[word][config.KEY['thumbnail']];
  return result === '' ? undefined : result;
}
function return_def(word, config) {
  if (!is_word_exist(word, config.DICTIONARY)) {
    return undefined
  }
  result = config.DICTIONARY[word][config.KEY['def']];
  return result === '' ? undefined : result;
}
function return_cat(word, config) {
  if (!is_word_exist(word, config.DICTIONARY)) {
    return undefined
  }
  return config.DICTIONARY[word][config.KEY['cat']];
}

module.exports = {
  is_word_exist,
  return_image,
  return_thumbnail,
  return_def,
  return_cat
};
