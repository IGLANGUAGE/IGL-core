/*
 * Copyright (c) 2025 IGLANGUAGE
 * Licensed under MIT (https://opensource.org/licenses/MIT)
 */

import { initWASM } from './wasm-loader';

(async () => {
  try {
    const wasm = await initWASM();
    
    console.log('3 * 5 =', wasm.multiply(3, 5));
    console.log('Square of 4:', wasm.square(4));
    console.log('Is 17 prime?', wasm.isPrime(17));
    
  } catch (err) {
    console.error('WASM init error:', err);
  }
})();
