// Используя только файл скрипта выполнить такие действия:


'use strict'


const bookList = document.querySelectorAll('.books');
const books = document.querySelectorAll('.book');
const body = document.querySelector('body');
const advert = document.querySelector('div.adv');
const booksTitle = document.querySelectorAll('.book a');
const titleLists = document.querySelectorAll('.book ul');
const titleListItem = document.querySelectorAll('.book li');

bookList[0].prepend(books[1]);
bookList[0].append(books[2]);
books[3].before(books[4]);

body.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";

booksTitle[4].innerText = 'Книга 3. this и Прототипы Объектов';

advert.remove()

for (let i = 0; i < titleLists.length; i++) {
    let titleList = titleLists[i];
    if (i == 0) {
        const titleListItem = titleList.querySelectorAll('li');
        titleListItem[3].after(titleListItem[6])
        titleListItem[6].after(titleListItem[8])
        titleListItem[9].after(titleListItem[2])
        titleListItem[9].before(titleListItem[7])
    } else if (i == 2) {
        const titleListItem = titleList.querySelectorAll('li');
        let cloneItem = titleListItem[8].cloneNode(true);
        cloneItem.innerText = 'Глава 8: За пределами ES6';
        titleListItem[8].after(cloneItem)
    } else if (i == 5) {
        const titleListItem = titleList.querySelectorAll('li');
        titleListItem[2].before(titleListItem[9])
        titleListItem[9].after(titleListItem[3])
        titleListItem[4].after(titleListItem[2])
        titleListItem[8].before(titleListItem[5])
    }
}

