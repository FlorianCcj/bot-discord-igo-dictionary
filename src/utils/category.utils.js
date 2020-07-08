function is_category_exist(cat, config) {
  for (const key in Object.keys(config.DICTIONARY)) {
    if (key === cat) {
      return true;
    }
  }
  return false;
}

function get_word_from_category(cat, config) {
  const dictionary = [];
  for (const key in config.DICTIONARY) {
    if (config.DICTIONARY[key][config.KEY['cat']].includes(cat)) {
      dictionary.push(key)
    }
  }
  return dictionary;
}

function get_all_categories(config) {
  let categories = [];
  for (const key in config.DICTIONARY) {
    const newcategories = config.DICTIONARY[key][config.KEY['cat']];
    categories = [...categories, ...newcategories.filter((item) => categories.indexOf(item) < 0)];
  }
  categories.sort();
  return categories;
}

module.exports = {
  get_all_categories,
  get_word_from_category,
  is_category_exist
};
