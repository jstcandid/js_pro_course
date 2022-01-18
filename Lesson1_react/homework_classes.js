// Создать класс счетчика, который будет иметь поле count - значение счетчика. Объект класса будет иметь следующие методы: метод для инкремента(+1) счетчика, метод для декремента(-1) счетчика, метод который будет возвращать (return) значение счетчика.

class Count {
  constructor(num) {
    this.num = num;
  }

  inc() {
    this.num += 1;
    return this.num;
  }

  decr() {
    return (this.num -= 1);
    return this.num;
  }

  curVal() {
    return this.num;
  }
}

let number = new Count(10);

number.inc();
number.inc();
// console.log(number.num);
number.decr();
// console.log(number.num);
number.curVal();
// console.log(number.num);

////////////////////////////////////////////////////////////////
// Реализуйте класс Worker (Работник), который будет создавать объект и иметь следующие свойства: name (имя), secondName (фамилия), rate (ставка за день работы), days (количество отработанных дней) сountOfDetails(количество выполненных деталей). Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days. У каждого объекта класса Worker должны быть доступны методы getName, getSecondName, getRate, getDays, каждый из которых будет возвращать соответствующее поле в объекте. И также методы setRate, setDays, которые будут устанавливать новые значения для соответственно свойств rate и days. Добавить метод, который будет увеличивать количество деталей на 1. Добавить метод, который будет делать ресет этого количества в 0

class Worker {
  constructor(name, secondName, rate, days, countOfDetails) {
    this.name = name;
    this.secondName = secondName;
    this.rate = rate;
    this.days = days;
    this.countOfDetails = countOfDetails;
  }

  getSalary() {
    return this.rate * this.days;
  }

  getName() {
    return this.name;
  }
  getSecondName() {
    return this.secondName;
  }
  getRate() {
    return this.rate;
  }
  getDays() {
    return this.days;
  }

  getSalary() {
    return this.rate * this.days;
  }

  setRate(rate) {
    this.rate = rate;
  }
  setDays(days) {
    this.days = days;
  }

  addDetail() {
    this.countOfDetails += 1;
    return this.countOfDetails;
  }

  resetDetail() {
    this.countOfDetails = 0;
    return this.countOfDetails;
  }
}

let worker = new Worker('James', 'Bond', 2000, 12, 123);

worker.resetDetail();
// console.log(worker);
worker.setDays(3);
// console.log(worker);
// console.log(worker.getDays());
worker.addDetail();
// console.log(worker);
// console.log(worker.getSalary());

// Реализуйте класс MyString, объект которого будет иметь следующие методы: метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.

class MyString {
  reverse(str) {
    return str.split('').reverse().join('');
  }

  ucFirst(str) {
    let strArr = str.split('');
    let capitalizedArr = strArr.map((item, index) => {
      if (index === 0) {
        return item.toUpperCase();
      }

      return item;
    });

    return capitalizedArr.join('');
  }

  ucWords(str) {
    let strArr = str.split('');
    let capitalizedArr = strArr.reduce((acc, curr, index) => {
      if (strArr[index - 1] === ' ' || index === 0) {
        acc += curr.toUpperCase();
      } else {
        acc += curr;
      }

      return acc;
    }, '');

    return capitalizedArr;
  }
}

let myStr = new MyString();

// console.log(myStr.ucWords('mama just killed a man.'));

// Реализуйте класс Student, который будет наследовать класс User. Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получить программно, используя объект Date (https://learn.javascript.ru/datetime).

function studentException(message) {
  this.message = message;
  this.name = 'student Exception';
}

class User {
  constructor(name, lastName, email) {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
  }

  getFullName() {
    return this.name + ' ' + this.lastName;
  }

  getEmail() {
    return this.email;
  }
}

class Student extends User {
  constructor(name, lastName, year) {
    super(name, lastName);
    this._year = year;
  }

  get year() {
    return this._year;
  }
  set year(yearVal) {
    let dt = new Date();
    if (dt.getFullYear() - yearVal <= 5) {
      this._year = yearVal;
    } else {
      throw new studentException(`Student cant study for that long`);
    }
  }

  getCourse() {
    let dt = new Date();
    return dt.getFullYear() - this.year;
  }
}

let stud = new Student('Harry', 'Potter', 2020);
console.log(stud);
console.log(stud.getCourse());
console.log(stud.getFullName());
stud.year = 204;
console.log(stud);
