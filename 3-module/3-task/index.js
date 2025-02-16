function camelize(str) {
  // ваш код...
  let arr = str.split("-");
  let modify = arr
    .slice(1)
    .map((item) => `${item.charAt(0).toUpperCase()}${item.slice(1)}`);
  return arr.slice(0, 1).concat(modify).join("");
}
