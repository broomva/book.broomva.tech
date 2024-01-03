#%%
import os
import re


def update_date(match):
    # Extract the date and time parts and reformat them
    date_part = match.group(1).replace('-', '')
    time_part = match.group(2).replace('.', '')
    return f'{date_part}_at_{time_part}'

def update_link(match):
    old_link = match.group(2)
    new_link = old_link.replace('%20', ' ').replace(' ', '_').lower()

    # Update date format in the link
    new_link = re.sub(r'(\d{4}-\d{2}-\d{2})_at_(\d{2}\.\d{2}\.\d{2})', update_date, new_link)

    return f'[{match.group(1)}]({new_link})'

def process_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    updated_content = re.sub(r'\[([^\]]+)\]\(([^\)]+)\)', update_link, content)

    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(updated_content)

def main(root_dir):
    for dirpath, dirnames, filenames in os.walk(root_dir):
        for filename in filenames:
            if filename.endswith('.md'):
                file_path = os.path.join(dirpath, filename)
                process_file(file_path)

#%%
# Replace 'root_dir' with the root directory of your .md files
main('online_courses_notes/x')

# %%
