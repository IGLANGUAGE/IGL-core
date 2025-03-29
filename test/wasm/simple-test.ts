import { instantiate } from "@assemblyscript/loader";
import * as fs from 'fs';

async function test() {
  const wasm = await instantiate(fs.readFileSync('./pkg/simd.wasm'));
  console.log('Exports:', Object.keys(wasm.exports));
}

test().catch(console.error);
