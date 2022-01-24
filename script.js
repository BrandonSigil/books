function myApp () {

  let myLibrary = [];

  let bookCard = document.getElementById('bookCard');
  let bookTitle = document.getElementById('bookTitle');
  let bookAuthor = document.getElementById('bookAuthor');
  let bookPages = document.getElementById('bookPages');
  let bookRead = document.getElementById('bookRead');
  let modal = document.getElementById("myModal");
  let btn = document.getElementById("addBook");
  let span = document.getElementsByClassName("close")[0];
  let createBook = document.getElementById('createBook');


  // Allows modal to work 
  btn.onclick = function() {
    modal.style.display = "block";
  }

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  // BOOK OBJECT  
  function book(title, author, pages, read) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.read = read;
      this.info = title + " by " + author +", "+ pages + ", " + read;
      }
 
  function addBookToLibrary () {
    const title = 'GIMME';
    const author = 'SOMEONE'

    const newCard = document.createElement("div");
    newCard.className = 'bookCard';
    newCard.id = 'bookCard+';
    document.getElementById('bookGrid').appendChild(newCard);

    // interior card
    const newTitle = document.createElement("h3");
    newTitle.innerHTML = title;
    document.getElementById('bookCard+').appendChild(newTitle)

    const newAuthor = document.createElement('p')
    newAuthor.innerHTML = author;

  }

  // addBookToLibrary();

  // createBook.addEventListener('click', addBookToLibrary())

  document.getElementById('createBook').addEventListener('click', addBookToLibrary())
}

document.addEventListener("DOMContentLoaded", myApp); 


     // // test books
      // const hobbit = new book ("The Hobbit", "J.R.R Tolkien", "295 pages", "Read");
      // const notw = new book ("Name of the Wind", "Patrick Rothfuss", "608 pages", "Read");
    
      // bookTitle.innerHTML = hobbit.title;
      // bookAuthor.innerHTML = hobbit.author;
      // bookPages.innerHTML = hobbit.pages;
      // bookRead.innerHTML = hobbit.read;