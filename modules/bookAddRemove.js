export let bookArr = [];
class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  add() {
    const book = document.createElement('div');
    book.className = 'book';
    book.setAttribute('id', this.id);
    const title = document.createElement('span');
    title.className = 'title';
    title.textContent = this.title;
    book.appendChild(title);
    const author = document.createElement('span');
    author.className = 'author';
    author.textContent = this.author;
    book.appendChild(author);
    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', (e) => {
      Book.remove(e);
    });
    book.appendChild(removeBtn);
    document.querySelector('.books-container').appendChild(book);
  }

  static remove(e) {
    bookArr = bookArr.filter((each) => e.target.parentElement.id !== each.id);
    localStorage.setItem('books', JSON.stringify(bookArr));
    e.target.parentElement.remove();
  }
}

if ('books' in localStorage) {
  bookArr = JSON.parse(localStorage.books);
  bookArr.forEach((each) => {
    const newData = new Book(each.id, each.title, each.author);
    newData.add();
  });
}

export default Book;