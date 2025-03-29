/*
 * Copyright (c) 2025 IGLANGUAGE
 * Licensed under MIT (https://opensource.org/licenses/MIT)
 */

import { instantiate } from "@assemblyscript/loader";
import * as fs from 'fs';
import * as path from 'path';

export type WASMExports = {
  multiply: (a: number, b: number) => number;
  square: (x: number) => number;
  isPrime: (n: number) => boolean;
};

let wasm: { exports: WASMExports };

export async function initWASM(): Promise<WASMExports> {
  if (!wasm) {
    const wasmPath = path.join(__dirname, '../pkg/core.wasm');
    wasm = await instantiate(fs.readFileSync(wasmPath), {
      env: {
        abort: () => { throw new Error("WASM error"); }
      }
    });
  }
  return wasm.exports;
}
