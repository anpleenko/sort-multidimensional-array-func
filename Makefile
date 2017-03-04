prepublish:
	rm -rf ./dist
	babel index.js --out-dir ./dist
