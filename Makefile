.PHONY: wasm clean test

wasm:
npm run asbuild

test:
npm run test:wasm

clean:
rm -rf pkg dist
