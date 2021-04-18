const fs = require('fs');
const glob = require('glob');
const path = require('path');

const SRC_DIR = './src';
const LANG_DIR = './public/lang';

let languages = {};

const searchLanguageFiles = () => {
  glob.sync(`${SRC_DIR}/**/translations/**/*.json`).map((globFilePath) => {
    const paths = globFilePath.split('/').reverse();

    const file = paths[0].toLowerCase().replace('.json', '');
    const lang = paths[1].toLowerCase();
    const module = paths[3] === 'src' ? '__DEFAULT__' : paths[3].toLowerCase();

    const data = fs.readFileSync(globFilePath, 'utf8');

    const jsonData = JSON.parse(data);
    if (jsonData === {}) {
      return;
    }

    if (languages[lang] === undefined) {
      const obj = {};
      obj[module] = {};
      obj[module][file] = {};
      languages[lang] = obj;
    }

    if (languages[lang][module] === undefined) {
      languages[lang][module] = {};
    }

    const obj = {};
    obj[file] = { ...jsonData };

    languages[lang][module] = {
      ...languages[lang][module],
      ...obj,
    };
  });
};

const generateFiles = () => {
  Object.keys(languages).map((lang) => {
    const langPath = path.join(LANG_DIR, lang);

    if (!fs.existsSync(langPath)) {
      fs.mkdirSync(langPath, { recursive: true });
    }

    Object.keys(languages[lang]).map((module) => {
      const modulePath =
        module === '__DEFAULT__'
          ? path.join(langPath, 'translation.json')
          : path.join(langPath, `${module}.json`);

      const data = JSON.stringify(languages[lang][module]);

      fs.writeFileSync(modulePath, data, {
        encoding: 'utf8',
        flag: 'w+',
      });
    });
  });
};

try {
  searchLanguageFiles();

  if (languages !== {}) {
    generateFiles();
    console.log(
      '\x1b[32m✔\x1b[0m All translation files successfully generated.',
    );
  } else {
    console.warn('\x1b[31m✘\x1b[0m Unable to generate translation files.');
  }
} catch (err) {
  console.error('\x1b[33m⚠\x1b[0m Something went terrible wrong.', err);
}
