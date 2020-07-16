'''
This script generate the translation files
'''
#!/usr/bin/python3

import os
import glob
import re
import json

SRC_DIR = './src'
LANG_DIR = './public/lang'

languages = {}


def combine_files():
    '''
    Combine all file contents into one single object
    '''
    regex = r'(\w+)/translations/(\w+)/(\w+).json'

    for path in glob.glob(SRC_DIR + '/**/*.json', recursive=True):
        matches = re.finditer(regex, str(path), re.MULTILINE | re.IGNORECASE)
        if matches:
            for match in matches:
                mod = match.group(1).lower()
                loc = match.group(2).lower()
                fln = match.group(3).lower()

                with open(path) as json_file:
                    data = json.load(json_file)

                    if data == {}:
                        continue

                    if loc not in languages:
                        languages[loc] = {mod: {fln: {}}}

                    if mod not in languages[loc]:
                        languages[loc][mod] = {}

                    languages[loc][mod] = {
                        **languages[loc][mod], fln: {**data}}


def generate_files():
    '''
    Generates the language files
    '''

    for lang in languages:
        lang_path = os.path.join(LANG_DIR, lang)

        if not os.path.exists(lang_path):
            os.mkdir(lang_path)

        for module in languages[lang]:
            # src module means that the files exists in src/translations
            module_path = os.path.join(
                lang_path, 'translation.json') if module == 'src' else os.path.join(
                lang_path, module + '.json')

            with open(module_path, 'w+') as json_file:
                json.dump(languages[lang][module], json_file)


if __name__ == '__main__':
    combine_files()

    if not languages:
        raise Exception('No languages found')

    generate_files()
