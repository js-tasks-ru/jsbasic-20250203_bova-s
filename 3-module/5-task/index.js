function getMinMax(str) {
  // ваш код...
  let arr = str
    .split(" ")
    .map((item) => Number(item))
    .filter((item) => Number.isFinite(item));
  return {
    min: Math.min(...arr),
    max: Math.max(...arr),
  };
}
