# Bora Kyung Min Lee

https://borakyungmin.com/

## Editing

The suggested method to edit the content is to edit the files directly on Github.

This includes replacing the background image, editing the bio, projects list, etc.

### Content

The **projects list, bio, and contact links** are editable as [YAML](https://yaml.org/)
at the top of [index.html](index.html). You shouldn't need to make any changes to the
HTML below that.

The **background image** is at [assets/background.jpg](assets/background.jpg), which you 
are free to replace through the Github user interface.

The **design** is described in the main stylesheet at [assets/style.scss](assets/style.scss).
There are variables defined at the top that cover most of the adjustments you'd probably want
to make, and you are free of course to adjust things otherwise as needed. AI is pretty good
at suggesting changes to the stylesheet if you can describe the result you are looking for.

## Development

This static site is built by [Jekyll](https://jekyllrb.com/), using Github Pages.

For local development, all you need is [Docker](https://www.docker.com/).

Then, run `make` to serve the site at http://localhost:4000/

Any commits to the main branch will deploy the site.

## Cargo

The DNS records have been updated in Cargo to point to Github pages, so that https://borakyungmin.com/ goes here.

Followed https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#dns-records-for-your-custom-domain

<img width="800" alt="image" src="https://github.com/user-attachments/assets/62d7486f-7469-4970-83f3-fdbb037831e1" />
