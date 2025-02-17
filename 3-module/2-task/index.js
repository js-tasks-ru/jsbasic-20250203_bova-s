function filterRange(arr, a, b) {
  // ваш код...
  return arr.filter((item) => {
    if (item >= a && item <= b) return item;
  });
}
