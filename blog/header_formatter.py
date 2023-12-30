#%%
import os

# Define the directory and the template
directory = '/Users/broomva/GitHub/book.broomva.tech/blog/tech_scribbles'


# Iterate over all files in the directory
for filename in os.listdir(directory):
    # Check if the file is a .md file
    if filename.endswith('.md'):
        # Open the file
        with open(os.path.join(directory, filename), 'r+') as file:
            # Read the file content
            content = file.read()
            # Go to the beginning of the file
            file.seek(0)
            template = f"""---
slug: {os.path.splitext(filename)[0]}
title: {str(os.path.splitext(filename)[0]).replace('_', ' ').title()}
authors: broomva
tags: [tech_scribbles, broomva]
date: 2020-12-30
---
"""
            # Write the template and the original content to the file
            file.write(template + content)
# %%
