function factorial(n) {
  // ваш код...
  let f = 1;
  while (n > 0) {
    f = f * n;
    n--;
  }
  return f;
}
