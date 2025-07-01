let booksKeys = Object.keys(books);
let ourBooks = [];

for (let i = 0; i < booksKeys.length; i++) {  
ourBooks.push(books[booksKeys[i]]);
}



function renderBookSection(){
  let booksKeysRef = document.getElementById("books_section")
  booksKeysRef.innerHTML = "";

  for (let index = 0; index < ourBooks.length; index++) {
    booksKeysRef.innerHTML += getBookTemplate(index);
  }

}






    
    

  





