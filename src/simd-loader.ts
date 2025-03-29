import { instantiate } from "@assemblyscript/loader";
import * as fs from 'fs';
import * as path from 'path';

export async function loadSIMD() {
  const wasmPath = path.join(__dirname, '../pkg/simd.wasm');
  const imports = {
    env: {
      simd: "enabled",
      abort: () => { throw new Error("WASM error") }
    }
  };
  
  const { exports } = await instantiate(fs.readFileSync(wasmPath), imports);
  return {
    simdAdd: exports.simdAdd as (a: Float32Array, b: Float32Array) => Float32Array,
    simdMultiply: exports.simdMultiply as (a: Float32Array, b: Float32Array) => Float32Array
  };
}
