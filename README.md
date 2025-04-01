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
AI is pretty good at suggesting changes to the stylesheet if copy/paste the whole thing and 
describe what you are trying to change.

## Development

This static site is built by [Jekyll](https://jekyllrb.com/), using Github Pages.

For local development, all you need is [Docker](https://www.docker.com/).

Then, run `make` to serve the site at http://localhost:4000/

Any commits to the main branch will deploy the site.