---
title: Configuring my digital garden
description: How I set up my personal knowledge base
date: 2023-07-25
tags:
 - "digital gardening"
 - setup
 - "online tools"
 - seedling
---
## The basic authoring process:
- write content on hackmd or other markdown editor
- push to Github repo
- Netlify watches the repo for changes and builds a new Eleventy (11ty) site

## /now
To set up the /now page I had to:
- create a rewrite in `netlify.toml` to /pages/now/
- manually edit the navigation template (include)

