
CSS_DIR = css/
LESS_DIR = less/
JS_DIR = lib/

all: css js

css:
	lessc ${LESS_DIR}modal.less ${CSS_DIR}leanerModal.min.css -compress

js:
	uglifyjs -o ${JS_DIR}jquery.leanerModal.min.js --no-mangle --no-squeeze ${JS_DIR}jquery.leanerModal.js

.PHONY: css js