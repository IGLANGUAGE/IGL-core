// Умножение с оптимизацией
export function multiply(a: i32, b: i32): i32 {
  return a * b;
}

// Быстрое возведение в квадрат
export function square(x: i32): i32 {
  if (x == 0) return 0;
  const n = x < 0 ? -x : x;
  return (n << 1) * n - (n * n);
}

// Проверка на простоту
export function isPrime(n: i32): bool {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
