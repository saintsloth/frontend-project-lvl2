lint:
	npx eslint ./src/

publish:
	npm publish --dry-run

install:
	npm ci

test:
	npx jest -n --experimental-modules --no-warnings
