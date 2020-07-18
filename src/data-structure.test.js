const {DICTIONARY, KEY} = require('../config');

function synonym_has_no_prop(dictionary) {
  word_properties = [
    KEY['cat'],
    KEY['def'],
    KEY['image'],
    KEY['link_to'],
    KEY['thumbnail'],
  ];
  result = {};
  for (word in dictionary) {
    word_detail = dictionary[word];
    if (word_detail.hasOwnProperty(KEY['equals']) && typeof(word_detail[KEY['equals']]) === 'string') {
      result[word] = true;
      word_properties.forEach((prop) => {
        result[word] = result[word] && !word_detail.hasOwnProperty(prop);
      });
    }
  }
  return result;
}

function gather_all_synonyms(dictionary) {
  result = {};
  for (word in dictionary) {
    word_detail = dictionary[word];
    if (word_detail.hasOwnProperty(KEY['equals']) && typeof(word_detail[KEY['equals']]) === 'string') {
      main_word = word_detail[KEY['equals']];
      if (!result.hasOwnProperty(main_word)) {
        result[main_word] = []
      }
      result[main_word].push(word);
    }
  }
  return result;
}

function gather_miss_structured_word(dictionary) {
  result = [];
  for (word in dictionary) {
    const word_detail = dictionary[word];
    if (word_detail.hasOwnProperty(KEY['def'])) {
      if (typeof(word_detail[KEY['def']]) !== 'string') {
        result.push(word_detail);
      }
    } else if (word_detail.hasOwnProperty(KEY['equals'])) {
      if (typeof(word_detail[KEY['equals']]) !== 'string') {
        result.push(word);
      }
    } else {
      result.push(word);
    }
  }
  return result;
}

describe('data structure check', () => {
  describe('check function', () => {
    test('synonym_has_no_prop', () => {
      dictionary = {
        def1: {def: 'def1'},
        def2: {synonym: 'def1'},
        def3: {def: 'def3', synonym: 'def1'},
      };
      result = synonym_has_no_prop(dictionary);

      expect(result.def1).toBeUndefined();
      expect(result.def2).toBeTruthy();
      expect(result.def3).toBeFalsy();
    });

    test('gather_all_synonyms', () => {
      dictionary = {
        def1: {
          def: 'def1',
          synonym: ['def2', 'def3']
        },
        def2: {synonym: 'def1'},
        def3: {synonym: 'def1'},
        def4: {def: 'def4'},
        def5: {synonym: 'def4'},
        def6: {def:'def6', synonym: 'def7'},
      }

      result = gather_all_synonyms(dictionary);
      expect(result.def1).toBeDefined();
      expect(result.def2).toBeUndefined();
      expect(result.def3).toBeUndefined();
      expect(result.def4).toBeDefined();
      expect(result.def5).toBeUndefined();
      expect(result.def6).toBeUndefined();
      expect(result.def7).toBeDefined();
      expect(result.def1.sort()).toStrictEqual(dictionary['def1'][KEY['equals']].sort());
      expect(result.def4.sort()).not.toStrictEqual(dictionary['def4'][KEY['equals']]);
    });

    describe('gather_miss_structured_word', () => {
      test('return empty array if def is well structured', () => {
        const dictionary = {def1: {def: 'def1'}, def2: {synonym: 'def1'}};
        result = gather_miss_structured_word(dictionary);
        expect(result.length).toBe(0);
      });

      test('return bad word if there is problems', () => {
        const dictionary = {
          def1: {},
          def2: {synonym: []},
          def3: {def: []},
          def4: {def: 'def4'},
          def5: {synonym: 'def3'},
        };
        result = gather_miss_structured_word(dictionary);
        expect(result.length).toBe(3);
      });
    });
  });

  describe('check data', () => {
    test('synonym_has_no_prop', () => {
      result = synonym_has_no_prop(DICTIONARY);
      for (word in result) {
        expect(result[word]).toBeTruthy();
      }
    });

    test('gather_all_synonyms', () => {
      result = gather_all_synonyms(DICTIONARY);
      for (word in result) {
        try {
          expect(result[word]).toBeDefined();
        } catch (e) {
          console.log(`No word have '${word}' has synonym`)
          expect(result[word]).toBeDefined();
        }
        try {
          expect(DICTIONARY[word][KEY['equals']]).toBeDefined();
        } catch (e) {
          console.log(`'${word}' not have the key synonym`)
          expect(DICTIONARY[word][KEY['equals']]).toBeDefined();
        }
        try {
          expect(result[word].sort()).toStrictEqual(DICTIONARY[word][KEY['equals']].sort());
        } catch (e) {
          console.log(`'${word}' do not have all his synonym`)
          expect(result[word].sort()).toStrictEqual(DICTIONARY[word][KEY['equals']].sort());
        }
      }
    });

    test('gather_miss_structured_word', () => {
      result = gather_miss_structured_word(DICTIONARY);
      try {
        expect(result.length).toBe(0);
      } catch (e) {
        console.log('following word are not well defined');
        console.log(result);
        expect(result.length).toBe(0);
      }
    });
  });

});