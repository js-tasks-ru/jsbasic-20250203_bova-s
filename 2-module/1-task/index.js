function sumSalary(salaries) {
  // ваш код...
  let amount = 0;
  for (let key in salaries) {
    if (isFinite(salaries[key])) amount = amount + salaries[key];
  }
  return amount;
}
