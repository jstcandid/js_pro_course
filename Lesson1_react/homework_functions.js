// Создать массив из 10 чисел. Необходимо создать новый массив, в котором числа будут возведены в квадрат. Например: [1,2,3] -> [1,4,9].
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let sum = arr.reduce((prev, prev) => {
//   console.log(prev, curr);
//   return prev + curr;
// }, 0);

let arr = [1, 2, 3];
let squareArr = arr.map((item) => {
  return item * item;
});

// console.log(squareArr);

// Создать массив из 20 чисел. Необходимо высчитать сумму всех элементов.

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 5, 4, 3, 2, 1, 4, 5];

let sum = arr1.reduce((acc, curr) => {
  return acc + curr;
}, 0);

// console.log(sum);
// Напишите код, который добавит символ двоеточие(':') между нечетными числами. Например, число 556 результат должен быть '5:56', 566 -> 566, 655 -> 65:5

function uneven(num) {
  let arr = String(num).split('');
  let result = arr.reduce((acc, cur, index) => {
    if (arr[index - 1] % 2 !== 0 && cur % 2 !== 0 && index !== 0) {
      acc += `:${cur}`;
    } else {
      acc += cur;
    }
    return acc;
  }, '');

  return result;
}

// console.log(uneven(2335455));

// Создайте 2 массива с разной длинной. Необходимо написать код,который создаёт массив элементов представляющих собой разность соответствующих элементов заданных массивов.

let difference = (arr1, arr2) => {
  let res = [];

  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    if (arr1.length < arr2.length) {
      for (let i = arr1.length; i < arr2.length; i++) {
        arr1[i] = 0;
      }
    } else if (arr1.length > arr2.length) {
      for (let i = arr2.length; i < arr1.length; i++) {
        arr2[i] = 0;
      }
    }
    res[i] = arr1[i] - arr2[i];
  }

  return res;
};

// console.log(difference([1, 2, 3, 6, 5], [1, 2, 3, 4, 5, 1, 2]));

// Создайте 2 массива с разной длинной. Необходимо написать код,который создаёт массив элементов представляющих собой сумму соответствующих элементов заданных массивов.

let summary = (arr1, arr2) => {
  let res = [];

  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    if (arr1.length < arr2.length) {
      for (let i = arr1.length; i < arr2.length; i++) {
        arr1[i] = 0;
      }
    } else if (arr1.length > arr2.length) {
      for (let i = arr2.length; i < arr1.length; i++) {
        arr2[i] = 0;
      }
    }
    res[i] = arr1[i] + arr2[i];
  }
  return res;
};

// console.log(summary([1, 2, 3, 6, 5], [1, 2, 3, 4, 5, 1, 2]));

// Напишите код, который разворачивает исходный массив и сохраняет это в новую переменную. Например: исходный массив - [1, 2, 3], результирующий массив - [3, 2, 1]

let reverse = (arr) => {
  return arr.reverse();
};

// console.log(reverse(arr));

// Фильтр юзеров Создать массив объектов для юзеров. Пример:
// Написать скрипт, который будет на выходе отдавать два массива. Первый с совершеннолетними пользователями, второй с несовершеннолетними.

let userArr = [
  { name: 'Ivan', age: 18 },
  { name: 'Petr', age: 12 },
  { name: 'Sidr', age: 25 },
];

let userFilter = (arr) => {
  let after18 = arr.filter((item) => item.age > 18);
  let under18 = arr.filter((item) => item.age <= 18);
  return {
    under18: under18,
    after18: after18,
  };
};

//console.log(userFilter(userArr));

// Необходимо создать массив из 15 элементов. В массиве обязательно должны быть одинаковые значения. Напишите код, который уберет эти дубликаты из созданного массива.

arr = [1, 2, 2, 3, 3, 3, 3, 4, 5, 5, 6, 7, 8, 9, 11];

let delDupl = (arr) => {
  return arr.filter((item, index) => arr.indexOf(item) === index);
};

// console.log(delDupl(arr));

// Напишите код, который проверит является строка полиндромом (слово, которое с обеих сторон читается одинаково, например РЕПЕР, ШАЛАШ)

let ifPalindr = (str) => {
  return str.split('').reverse().join('') === str;
};

// console.log(ifPalindr('sos'));

// Написать функцию, которая принимает первым аргументом массив, а вторым любое значение, функция должна вернуть индекс если такое значение есть в массиве и -1 если его нет. (indexOf, findIndex не использовать!)

let ifHas = (arr, val) => {
  if (arr.includes(val)) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === val) {
        return i;
      }
    }
  } else {
    return -1;
  }
};

console.log(ifHas(arr, 1));
// console.log(ifHas(arr, 1));
// Написать функцию search, которая принимает первым аргументом массив имен:
// [ ‘Ivan’, ‘Petr’, ‘Sidor’, ...]
// и любую произвольную строку. Функция должна отфильтровать массив в зависимости от строки (в независимости от регистра). Например:

// search([‘Ivan’, ‘Petr’, ‘Sidor’], 'si') -> ['Sidor']
// search([‘Ivan’, ‘Petr’, ‘Sidor’], 'i') -> [‘Ivan’,'Sidor']
// search([‘Ivan’, ‘Petr’, ‘Sidor’, 'Petric'], 'eTr') -> [‘Petr’,'Petric']
// search([‘Ivan’, ‘Petr’, ‘Sidor’, 'Petric'], 'eTrooo') -> []

let names = ['Ivan', 'Petr', 'Sidor', 'Petric'];

let search = (arr, str) => {
  return arr.filter((item) => item.toLowerCase().includes(str.toLowerCase()));
};

// console.log(search(names, 'eTr'));

// Написать функцию сравнения двух массивов, которая возвращает true или false в зависимости от того, одинаковые у них элементы или нет. Пример:

// checkIsEqaul([1,2,3], [1,2,3]) -> true
// checkIsEqaul([1,2,3], [1,2,3,4]) -> false
// checkIsEqaul([1,2,3], [1,'2',3]) -> false

let checkIsEqaul = (arr1, arr2) => {
  if (arr1.length === arr2.length) {
    return (
      arr1
        .filter((item) => !arr2.includes(item))
        .concat(arr2.filter((item) => !arr1.includes(item))).length === 0
    );
  }
  return false;
};

// console.log(checkIsEqaul([1, 2, 3], [1, 2, 3]));
