import { instantiate } from "@assemblyscript/loader";
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

async function testSIMD() {
  try {
    const wasmPath = join(__dirname, '../../pkg/simd.wasm');
    const { exports } = await instantiate(readFileSync(wasmPath));
    
    console.log('WASM exports:', Object.keys(exports));
    
    if (exports.simdAdd) {
      const a = new Float32Array([1, 2, 3, 4]);
      const b = new Float32Array([5, 6, 7, 8]);
      const result = exports.simdAdd(a, b);
      console.log('SIMD Result:', result);
    }
  } catch (err) {
    console.error('Test failed:', err);
  }
}

testSIMD();
