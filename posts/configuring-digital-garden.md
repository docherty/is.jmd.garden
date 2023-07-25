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

Notes:
- 11ty is configured to use the `/posts/` directory as the source of posts so from within the Hackmd "push" interface I just create a new file in that directory.
- I add front-matter to the top of the markdown file by using a simple hackmd template I created. It's very basic stuff it looks something like this:
```
title: Configuring my digital garden
description: How I set up my personal knowledge base
date: 2023-07-25
tags:
 - "digital gardening"
 - setup
 - "online tools"
 - seedling
```
I can add anything I want here to configure how the page appears on the 11ty site.
## /now
To set up the `/now` page I had to:
- create a rewrite in `netlify.toml` to `/pages/now/`
- manually edit the navigation template (include) to hardcode the link
