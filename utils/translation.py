#%%
import hashlib
import json
import os

from googletrans import LANGUAGES, Translator
from langdetect import detect


def detect_language(text):
    try:
        return detect(text)
    except:
        return None

def translate_text(text, dest_lang):
    translator = Translator()
    translation = translator.translate(text, dest=dest_lang)
    return translation.text

def file_hash(filepath):
    with open(filepath, 'rb') as f:
        return hashlib.md5(f.read()).hexdigest()

def load_index(index_path):
    if os.path.exists(index_path):
        with open(index_path, 'r', encoding='utf-8') as file:
            return json.load(file)
    return {}

def save_index(index, index_path):
    with open(index_path, 'w', encoding='utf-8') as file:
        json.dump(index, file, indent=4)

def translate_and_move_files(source_path, target_base_path, index_path):
    index = load_index(index_path)

    for root, dirs, files in os.walk(source_path):
        for file in files:
            if file.endswith('.md'):
                file_path = os.path.join(root, file)
                file_content_hash = file_hash(file_path)

                if file_path in index and index[file_path]['hash'] == file_content_hash:
                    continue  # Skip if file hasn't changed

                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()

                detected_lang = detect_language(content)
                target_lang = 'es' if detected_lang == 'en' else 'en'
                translated_content = translate_text(content, target_lang)

                if detected_lang == 'en':
                    translated_path = file_path.replace(source_path, target_base_path)
                else:
                    translated_path = file_path.replace(target_base_path, source_path)

                # Moving the file if necessary
                if file_path != translated_path:
                    os.rename(file_path, translated_path)

                # Saving the translated content
                os.makedirs(os.path.dirname(translated_path), exist_ok=True)
                with open(translated_path, 'w', encoding='utf-8') as f:
                    f.write(translated_content)

                # Update index
                index[file_path] = {
                    'translated_path': translated_path,
                    'hash': file_content_hash
                }

    save_index(index, index_path)

#%%

# Usage
translate_and_move_files(
    source_path='/Users/broomva/GitHub/book.broomva.tech/docs/online_courses_notes', 
    target_base_path='/Users/broomva/GitHub/book.broomva.tech/i18n/es/docusaurus-plugin-content-docs/current/online_courses_notes', 
    index_path='.translation_index.json')
