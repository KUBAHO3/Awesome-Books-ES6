import { DateTime } from './modules/luxon.js';
import Book from './modules/book.js';
import Structure from './modules/structure.js';
import Store from './modules/store.js';

// define the current local time
const currentDate = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
document.getElementById('current-date').innerHTML = currentDate;

// Event: Display Books
document.addEventListener('DOMContentLoaded', Structure.displayBooks);

// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
  // Prevent actual submit
  e.preventDefault();

  // Get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  // Instatiate book
  const book = new Book(title, author);

  // Add Book to Structure
  Structure.addBookToList(book);

  // Add book to store
  Store.addBook(book);

  // Clear fields
  Structure.clearFields();
});

// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => {
  // Remove book from Structure
  Structure.deleteBook(e.target);

  // Remove book from store
  Store.removeBook(e.target.previousElementSibling.previousElementSibling.textContent);
});

// display the books list when click the button "List"
const bookList = document.querySelector('.book-list-container');
const listBtn = document.querySelector('.listBtn');
const formContainer = document.querySelector('.form-container');
const contactInfo = document.querySelector('.contact-info');

listBtn.addEventListener('click', () => {
  bookList.classList.remove('hide');
  formContainer.classList.add('hide');
  contactInfo.classList.add('hide');
});

window.addEventListener('load', () => {
  bookList.classList.remove('hide');
  formContainer.classList.add('hide');
  contactInfo.classList.add('hide');
});

// display the Add book form  when click the button "Add new"
const addNewBtn = document.querySelector('.add-new-btn');

addNewBtn.addEventListener('click', () => {
  bookList.classList.add('hide');
  formContainer.classList.remove('hide');
  contactInfo.classList.add('hide');
});

// display the  Contact section when click the button "Contact"
const contactBtn = document.querySelector('.contact');
contactBtn.addEventListener('click', () => {
  bookList.classList.add('hide');
  formContainer.classList.add('hide');
  contactInfo.classList.remove('hide');
});