lint:
	npx eslint ./src/

publish:
	npm publish --dry-run

install:
	npm ci
