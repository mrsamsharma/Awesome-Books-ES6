
import {bookArr, addBtn, titleInput, authorInput} from "../index.js";
import Book from "./bookAddRemove.js";
const addBtnEvent = () => {addBtn.addEventListener('click', () => {
  if (titleInput.value && authorInput.value) {
  /* eslint-disable */
  const bookItem = new Book(authorInput.value + bookArr.length, '\"' + titleInput.value + '\"', ' by ' + authorInput.value);
  /* eslint-enable */
    bookItem.add();
    bookArr.push(bookItem);
    localStorage.setItem('books', JSON.stringify(bookArr));
  }
});
}

export default addBtnEvent