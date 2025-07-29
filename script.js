let booksKeys = Object.keys(books);
let myBooks = [];

for (let index = 0; index < booksKeys.length; index++) {
  myBooks.push(books[booksKeys[index]]);
} 

function renderBookSection(){
  let myBook = document.getElementById('books_section');
  myBooks.innerHTML = "";
  
      for (let myBookIndex = 0; myBookIndex < myBooks.length; myBookIndex++) {
        myBook.innerHTML += getBooksTemplate(myBookIndex);
      }
}

function dNone(){
    let displayNone = 
    document.getElementsByClassName('like_btn');

        for (let dNone of displayNone) {
          dNone.classList.toggle('d_none');
        }
}