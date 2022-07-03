import bookArr from "../index.js";
import Book from "./bookAddRemove.js";
const loadLocalData = () => { if ('books' in localStorage) {
  bookArr = JSON.parse(localStorage.books);
  bookArr.forEach((each) => {
    const newData = new Book(each.id, each.title, each.author);
    newData.add();
  });
}
}
export default loadLocalData;