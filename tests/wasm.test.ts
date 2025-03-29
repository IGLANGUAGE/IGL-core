import { instantiate } from "@assemblyscript/loader";
import * as fs from 'fs';

describe('WASM Module', () => {
  let wasm: any;

  beforeAll(async () => {
    wasm = await instantiate(fs.readFileSync("./pkg/core.wasm"));
  });

  test('add function should work', () => {
    expect(wasm.exports.add(2, 3)).toBe(5);
  });

  test('WASM exports should exist', () => {
    expect(wasm.exports).toHaveProperty('add');
    expect(typeof wasm.exports.add).toBe('function');
  });
});
