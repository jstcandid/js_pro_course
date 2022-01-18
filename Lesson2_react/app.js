// let ysersPromise = fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => response.json())
//   .then((value) => {
//     value.forEach((element) => {
//       let div = document.createElement('div');
//       div.innerHTML = element.username;
//       document.body.append(div);
//     });
//   })
//   .catch((exception) => console.log('Something went wrong:\n' + exception))
//   .finally(console.log('Congrats, you are done'));

// let photos = fetch('https://jsonplaceholder.typicode.com/photos')
//   .then((response) => response.json())
//   .then((value) => {
//     value.forEach((element) => {
//       let img = document.createElement('img');
//       img.src = element.thumbnailUrl;
//       img.style.marginLeft = '10px';
//       img.style.marginRight = '10px';
//       img.style.marginBottom = '10px';
//       document.body.append(img);
//     });
//   })
//   .catch((exception) => console.log('Something went wrong:\n' + exception))
//   .finally(console.log('Congrats, you are done'));

// Сделайте промис, внутри которого будет setTimeout в 3 секунды, после которой промис должен зарезолвится (то есть выполнится успешно).
let task1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Done');
  }).then(() => console.log('We are done!'));
};

//task1();

// Сделайте промис, внутри которого будет setTimeout в 3 секунды, после которой промис должен зареджектится (то есть выполнится с ошибкой).

let task2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(reject, 3000, 'Rejected');
  });
};

//task2();

// Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайной задержкой от 1 до 5 секунд. Пусть каждый промис своим результатом возвращает эту задержку. С помощью Promise.all получите массив результатов, найдите его сумму, выведите на экран.

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

let p1 = new Promise((resolve, reject) => {
  let time = randomInteger(1, 5);
  setTimeout(resolve, time * 1000, time);
});
let p2 = new Promise((resolve, reject) => {
  let time = randomInteger(1, 5);
  setTimeout(resolve, time * 1000, time);
});
let p3 = new Promise((resolve, reject) => {
  let time = randomInteger(1, 5);
  setTimeout(resolve, time * 1000, time);
});

Promise.all([p1, p2, p3]).then((values) => {
  console.log(values);
  let res = values.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
  console.log(res);
});

// Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users, Отфильтровать массив пользователей, чтобы остались только пользователи с четными id.

let users = fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((value) => {
    return value.filter((element) => {
      return element.id % 2 === 0;
    });
  })
  .then((res) => console.log(res))
  .catch((exception) => console.log('Something went wrong:\n' + exception));

//Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users, вывести список карточек пользователей, отобразить имя, телефон и остальную информацию каждого пользователя. Вывести в html внутри div с id = 1
//Дополнить задание 5. Добавить инпут и кнопку Поиск. Сделать так, чтобы по нажатию на кнопку поиска списке оставались только те карточки, которые соответствуют введенному тексту (фильтрацию проводить по имени, телефону, email).

let url = 'https://jsonplaceholder.typicode.com/users';

let div1 = document.createElement('div');
div1.setAttribute('id', 1);

let inpt = document.createElement('div');
inpt.classList.add('input-group', 'mb-3', 'w-50', 'mx-auto');
let input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Enter here...');
input.setAttribute('aria-describedby', 'button-search');
input.classList.add('form-control');
let btn = document.createElement('button');
btn.classList.add('btn', 'btn-outline-success');
btn.setAttribute('type', 'button');
btn.setAttribute('id', 'button-search');
btn.innerText = 'Filter';
inpt.append(input);
inpt.append(btn);
div1.append(inpt);

btn.addEventListener('click', getUsersFilter);

async function getUsersFilter() {
  let response = await fetch(url);
  let data = await response.json();
  let newData = data.filter((element) => {
    if (
      element.phone.toLowerCase().includes(input.value.toLowerCase()) ||
      element.name.toLowerCase().includes(input.value.toLowerCase()) ||
      element.email.toLowerCase().includes(input.value.toLowerCase())
    ) {
      return element;
    }
  });
  render(newData);
}

async function getUsers() {
  let response = await fetch(url);
  let data = await response.json();
  render(data);
}

function render(value) {
  div1.innerHTML = '';
  div1.append(inpt);
  let row = document.createElement('div');
  row.classList.add('row');

  value.forEach((element) => {
    let col = document.createElement('div');
    col.classList.add('col-sm-4');
    col.classList.add('mb-3');
    let crd = document.createElement('div');
    crd.classList.add('card');
    let card = document.createElement('div');
    card.classList.add('card-body');
    let username = document.createElement('h3');
    username.innerText = element.username;
    let name = document.createElement('h5');
    name.innerText = element.name;
    let phone = document.createElement('p');
    phone.innerText = element.phone;
    let email = document.createElement('p');
    email.innerText = element.email;
    let website = document.createElement('p');
    website.innerText = element.website;
    card.append(username);
    card.append(name);
    card.append(phone);
    card.append(email);
    card.append(website);
    crd.append(card);
    col.append(crd);
    row.append(col);
  });
  div1.append(row);
  document.body.append(div1);
}

//getUsers(url);

//Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users/${userId}/todos, userId получить при помощи prompt. Вывести todo list пользователя, отобразить текст тудушки и индикатор выполнена она или нет (чекбокс). Вывести в html внутри div с id = 2

let div2 = document.createElement('div');
div2.setAttribute('id', 2);
div2.classList.add('w-100');

let createCheckBox = (isTrue, name) => {
  let check = document.createElement('div');
  check.classList.add('w-100');
  check.classList.add('form-check', 'mx-auto');
  let chkInput = document.createElement('input');
  chkInput.setAttribute('type', 'checkbox');
  chkInput.setAttribute('id', 'flexCheckDefault');
  chkInput.classList.add('form-check-input');
  if (isTrue === true) {
    chkInput.setAttribute('checked', 'checked');
  }
  let chkLabel = document.createElement('label');
  chkLabel.setAttribute('for', 'flexCheckDefault');
  chkLabel.classList.add('form-check-label');
  chkLabel.innerText = name;
  check.append(chkInput);
  check.append(chkLabel);

  return check;
};

async function getList() {
  let userId = prompt('Enter user id:');
  let url = `https://jsonplaceholder.typicode.com/users/${userId}/todos`;
  let response = await fetch(url);
  let data = await response.json();
  renderList(data);
}

function renderList(value) {
  let row = document.createElement('div');
  row.classList.add('row');
  let col = document.createElement('div');
  col.classList.add('col-sm-6', 'mb-3', 'mx-auto');
  let title = document.createElement('h3');
  title.innerText = 'To do list:';
  col.append(title);
  let card = document.createElement('div');
  card.classList.add('card', 'mx-auto');
  value.forEach((element) => {
    let elem = createCheckBox(element.completed, element.title);
    card.append(elem);
    col.append(card);
    row.append(col);
  });
  div2.append(row);
  document.body.append(div2);
}

//getList();

//Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/albums/1/photos, вывести фотографии, используя тег img. В качестве src для img использовать поле url в объекте фото. Дополнительно сделать, чтобы по нажатию на картинку картинка увеличивалась в размерах, повторное нажатие вернет картинку к исходному размеру. Вывести в html внутри div с id = 3

let div3 = document.createElement('div');
div3.setAttribute('id', 3);
url = `https://jsonplaceholder.typicode.com/albums/1/photos`;
let flag = false;

// let imgSizeChange = () => {
//   img.style.width = '60%';
//   img.style.height = 'auto';
//   img.style.transition = 'width 0.5s ease';
// };

let photos = () =>
  fetch(url)
    .then((response) => response.json())
    .then((value) => {
      let row = document.createElement('div');
      row.classList.add('row');
      value.forEach((element) => {
        let col = document.createElement('div');
        col.classList.add('col-sm-4', 'mb-3', 'px-5');
        let img = document.createElement('img');
        img.src = element.thumbnailUrl;
        img.onclick = function () {
          if (flag === false) {
            img.classList.add('w-75');
            flag = true;
          } else {
            img.classList.remove('w-75');
            flag = false;
          }
        };
        col.append(img);
        row.append(col);
      });
      div3.append(row);
      document.body.append(div3);
    })
    .catch((exception) => console.log('Something went wrong:\n' + exception));
//photos();

//Сделать запрос альбомов при помощи fetch на адрес https://jsonplaceholder.typicode.com/albums, Отобразить список альбомов и сделать там, чтобы по нажатию на альбом вместа списка альбомов отобразились фотографии, которые относяться к этому альбому(https://jsonplaceholder.typicode.com/photos). В списке альбомов добавить кнопку Назад, по нажатию на которую переходим обратно на список альбомов. Вывести в html внутри div с id = 4

let div4 = document.createElement('div');
div4.setAttribute('id', 4);
let url1 = `https://jsonplaceholder.typicode.com/albums`;
let url2 = `https://jsonplaceholder.typicode.com/photos`;

async function getAlbums() {
  let response = await fetch(url1);
  let data = await response.json();
  renderAlbums(data);
}

async function getPhotos(albumId) {
  let response = await fetch(url2);
  let data = await response.json();
  renderPhotos(data, albumId);
}

function renderAlbums(dataAlb) {
  let head = document.createElement('h3');
  head.classList.add('text-center');
  head.innerText = 'Albums';
  div4.append(head);
  let ul = document.createElement('ul');
  ul.classList.add('list-group', 'mx-auto', 'w-50', 'text-center');
  dataAlb.forEach((element) => {
    let li = document.createElement('li');
    li.classList.add('list-group-item');
    li.setAttribute('id', element.id);
    li.innerText = element.title;
    ul.append(li);
    ul.addEventListener('mouseover', (event) => {
      event.target.style.background = '#ffe4c4';
    });
    ul.addEventListener('mouseout', (event) => {
      event.target.style.background = '';
    });
  });
  div4.append(ul);
  document.body.append(div4);
}

function renderPhotos(data, id) {
  let row = document.createElement('div');
  row.classList.add('row');
  let value = data.filter((el) => +el.albumId === +id);
  value.forEach((element) => {
    let col = document.createElement('div');
    col.classList.add('col-sm-4', 'mb-3', 'px-5');
    let img = document.createElement('img');
    img.src = element.thumbnailUrl;
    img.onclick = function () {
      if (flag === false) {
        img.classList.add('w-75');
        flag = true;
      } else {
        img.classList.remove('w-75');
        flag = false;
      }
    };
    col.append(img);
    row.append(col);
  });
  let butn = document.createElement('button');
  butn.classList.add('btn', 'btn-link');
  butn.innerText = 'Back';
  butn.addEventListener('click', () => {
    div4.innerHTML = '';
    getAlbums();
  });

  div4.append(row);
  div4.append(butn);
  document.body.append(div4);
}

div4.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    div4.innerHTML = '';
    getPhotos(+event.target.getAttribute('id'));
  }
});

getAlbums();
