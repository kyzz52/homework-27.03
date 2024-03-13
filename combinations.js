function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  function combination(n, k) {
    if (k > n) {
      return "Ошибка: k должно быть меньше или равно n.";
    } else {
      return factorial(n) / (factorial(k) * factorial(n - k));
    }
  }

  const n = parseInt(prompt("Введите значение n:"));
  const k = parseInt(prompt("Введите значение k:"));
  
  if (isNaN(n) || isNaN(k)) {
    console.log("Ошибка: Неверно введены значения.");
  } else {
    const result = combination(n, k);
    console.log("Результат формулы сочетания C(" + n + ", " + k + ") =", result);
  }