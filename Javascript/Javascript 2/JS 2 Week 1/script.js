'use strict';
//1.1
const bookTitles = [
  // Replace with your own book titles
  'green_rider',
  'first_riders_call',
  'the_high_kings_tomb',
  'blackveil',
  'mirrorsight',
  'firebrand',
  'the_dream_gatherer',
  'winterlight',
  'the_naming',
  'kindred',
];

// 1.3

function renderBookList() {
  const createUl = document.createElement('ul');

  for (let i = 0; i < bookTitles.length; i++) {
    let createList = document.createElement('li');
    createList.textContent += bookTitles[i].replace(/_/g, ' ');
    createUl.appendChild(createList);
  }
  document.getElementById('myBookList').appendChild(createUl);
}

renderBookList();

// 1.4
const bookInfo = {
  green_rider: {
    title: 'Green Rider',
    language: 'English',
    author: 'Kristen Britain',
    image: 'https://kristenbritain.com/wp-content/uploads/2021/03/Green-Rider-Cover-677x1024.jpg',
  },

  first_riders_call: {
    title: 'First Riders Call',
    language: 'English',
    author: 'Kristen Britain',
    image: 'https://kristenbritain.com/wp-content/uploads/2021/03/First-Riders-Call-681x1024.jpg',
  },
  the_high_kings_tomb: {
    title: 'The High Kings Tomb',
    language: 'English',
    author: 'Kristen Britain',
    image: 'https://kristenbritain.com/wp-content/uploads/2021/03/The-High-Kings-Tomb-677x1024.jpg',
  },
  blackveil: {
    title: 'Blackveil',
    language: 'English',
    author: 'Kristen Britain',
    image: 'https://kristenbritain.com/wp-content/uploads/2021/03/Blackveil-677x1024.jpg',
  },
  mirrorsight: {
    title: 'Mirrorsight',
    language: 'English',
    author: 'Kristen Britain',
    image: 'https://kristenbritain.com/wp-content/uploads/2021/03/Mirror-Sight-677x1024.jpg',
  },
  firebrand: {
    title: 'Firebrand',
    language: 'English',
    author: 'Kristen Britain',
    image: 'https://kristenbritain.com/wp-content/uploads/2021/03/Firebrand-677x1024.jpg',
  },
  the_dream_gatherer: {
    title: 'The Dream Gatherer',
    language: 'English',
    author: 'Kristen Britain',
    image: 'https://kristenbritain.com/wp-content/uploads/2021/03/Dream-Gatherer-677x1024.jpg',
  },
  winterlight: {
    title: 'Winterlight',
    language: 'English',
    author: 'Kristen Britain',
    image: 'https://kristenbritain.com/wp-content/uploads/2021/03/Winterlight-675x1024.jpg',
  },
  the_naming: {
    title: 'The Naming',
    language: 'English',
    author: 'Allison Croggon',
    image: 'https://m.media-amazon.com/images/I/41vsRRRZfHL.jpg',
  },
  kindred: {
    title: 'Kindred',
    language: 'English',
    author: 'Octavia E. Butler',
    image:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1339423248i/60931.jpg',
  },
};
// console.log(bookInfo);
// 1.5

const infoUl = document.createElement('ul');

for (let [key, value] of Object.entries(bookInfo)) {
  let innerInfo = document.createElement('li');
  let bookHeader = document.createElement('h3');
  let item = document.createElement('p');
  let img = document.createElement('img');
  bookHeader.innerText = `${value.title}`;
  item.innerHTML = ` Author: ${value.author} Lang: ${value.language}`;
  img.src = `${value.image}`;
  innerInfo.appendChild(bookHeader);
  innerInfo.appendChild(item);
  innerInfo.appendChild(img);
  infoUl.appendChild(innerInfo);
}
document.getElementById('myBookInfo').appendChild(infoUl);

// 1.6
