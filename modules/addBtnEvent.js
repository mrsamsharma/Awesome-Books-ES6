import { addBtn, titleInput, authorInput } from '../index.js';
import Book from './bookAddRemove.js';

const addBtnEvent = () => { 
  addBtn.addEventListener('click', () => {
  if (titleInput.value && authorInput.value) {
  /* eslint-disable */
  const bookItem = new Book(authorInput.value + Book.bookArr.length, '\"' + titleInput.value + '\"', ' by ' + authorInput.value);
  /* eslint-enable */
    bookItem.add();
    Book.bookArr.push(bookItem);
    localStorage.setItem('books', JSON.stringify(Book.bookArr));
  }
});
};

export default addBtnEvent;