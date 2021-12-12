// Написать функцию, которая принимает любое количество чисел(не массив)и возвращает их сумму.

let sum = (...args) => {
  let sum = args.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
  return sum;
};

// console.log(sum(1, 2, 3, 4));

// Написать функцию, которая принимает первым аргументом массив, а вторым любое значение, функция должна вернуть индекс если такое значение есть в массиве и -1 если его нет.(indexOf, findIndex не использовать)
arr = [2, 3, 4, 1, 2, 3];

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

// console.log(ifHas(arr, -1));

// Написать функцию, которая будет возвращать количество вызовов этой функции в квадрате. (Использовать замыкание)
let forFunc = 0;
function countOfFunc() {
  forFunc++;
  function square() {
    return forFunc * forFunc;
  }
  return square();
}

// console.log(countOfFunc());
// console.log(countOfFunc());
// console.log(countOfFunc());
// console.log(countOfFunc());

// Напишите функцию, которая разделит массив на части заданного размера и вернет массив элементами которого являются эти части. Пример функции: splitArray([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]

let splitArray = (arr, size) => {
  let newArr = [];
  let bufArr = [];
  arr.forEach((item, index) => {
    if (index % size === 0 && index !== 0) {
      newArr.push(bufArr);
      bufArr = [];
    }
    bufArr.push(item);
  });
  newArr.push(bufArr);
  return newArr;
};

// console.log(splitArray([1, 2, 3, 4, 5], 2));

// Написать функцию, которая приобразуем любую строку в строку написанную кебаб кейсом (все буквы с маленькой буквы и на месте пробелов - тире) Например: 'Hello World' -> 'hello-world'; 'Hello dear hell' -> 'hello-dear-hell'

let kebab = (str) => {
  return str
    .toLowerCase()
    .split('')
    .map((item) => {
      if (item === ' ') {
        item = '-';
      }
      return item;
    })
    .join('');
};

// console.log(kebab('Hello dear hell'));
