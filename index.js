import { DateTime } from '../luxon.js';
import Book from './modules/bookAddRemove.js';
export const titleInput = document.querySelector('.title-input');
export const authorInput = document.querySelector('.author-input');
export const addBtn = document.querySelector('.add-input');
export const listBtn = document.querySelector('.list-btn');
export const bookAddBtn = document.querySelector('.add-btn');
export const contactBtn = document.querySelector('.contact-btn');
const timeElement = document.querySelector('.time');
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];
const date = ` ${monthNames[DateTime.now().c.month - 1]} ${DateTime.now().c.day} ${DateTime.now().c.year}`;
const time = `${DateTime.now().c.hour}:${DateTime.now().c.minute}`;

timeElement.textContent = `${date}, ${time}`;

addBtn.addEventListener('click', () => {
  if (titleInput.value && authorInput.value) {
    const bookItem = new Book(authorInput.value + Book.bookArr.length, '\'' + titleInput.value + '\'', ' by ' + authorInput.value);
    bookItem.add();
    Book.bookArr.push(bookItem);
    localStorage.setItem('books', JSON.stringify(Book.bookArr));
  }
});

listBtn.addEventListener('click', () => {
  document.querySelector('.books').style.display = 'block';
  document.querySelector('.add-book').style.display = 'none';
  document.querySelector('.contact').style.display = 'none';
});

bookAddBtn.addEventListener('click', () => {
  document.querySelector('.add-book').style.display = 'block';
  document.querySelector('.books').style.display = 'none';
  document.querySelector('.contact').style.display = 'none';
});

contactBtn.addEventListener('click', () => {
  document.querySelector('.contact').style.display = 'flex';
  document.querySelector('.books').style.display = 'none';
  document.querySelector('.add-book').style.display = 'none';
});
