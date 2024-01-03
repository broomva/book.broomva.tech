#%%
import os


def create_index(dir_path, file_output_path):
    with open(file_output_path, 'w') as file_output:
        for root, dirs, files in os.walk(dir_path):
            level = root.replace(dir_path, '').count(os.sep)
            indent = ' ' * 4 * (level)
            file_output.write('{}- {}\n'.format(indent, os.path.basename(root)))
            subindent = ' ' * 4 * (level + 1)
            for f in files:
                if f.endswith('.md'):
                    file_path = os.path.join(root, f)
                    with open(file_path, 'r') as md_file:
                        first_line = md_file.readline().strip()
                        if first_line.startswith('# '):
                            link_text = first_line[2:]
                        else:
                            link_text = f
                    file_output.write('{}- [{}]({})\n'.format(subindent, link_text, file_path))

create_index('./', 'index.md')
# %%