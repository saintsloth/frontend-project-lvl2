lint:
	npx eslint ./src/ ./formatters/

publish:
	npm publish --dry-run

install:
	npm ci

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

.PHONY: test
