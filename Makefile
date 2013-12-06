TESTS = test/*.js
REPORTER=spec

test:
	@./node_modules/.bin/mocha \
                --require should \
                --require test/common.js \
                --reporter ${REPORTER} \
                --growl \
                $(TESTS)

.PHONY: test bench
