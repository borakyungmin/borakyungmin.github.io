
# https://github.com/envygeeks/jekyll-docker/blob/master/README.md
# https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll
# https://jekyllrb.com/docs/github-pages/
serve:
	docker run --rm --interactive --tty \
		--volume=".:/srv/jekyll" \
		--publish 4000:4000 \
			jekyll/jekyll \
				sh -c "gem install webrick && jekyll serve --host 0.0.0.0"