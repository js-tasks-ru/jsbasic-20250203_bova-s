let calculator = {
  // ваш код
  read: (a, b) => {
    this.obj = { a, b };
  },
  sum: () => {
    return this.obj.a + this.obj.b;
  },
  mul: () => {
    return this.obj.a * this.obj.b;
  },
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
