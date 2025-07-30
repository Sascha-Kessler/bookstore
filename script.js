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

function toggleLike(btn){
    let otherBtn;

    if (btn.classList.contains('d_none')) {
        otherBtn = btn.parentElement.querySelector('.like_btn:not(.d_none)')
    } else {
        otherBtn = btn.parentElement.querySelector('.like_btn.d_none');
    }
   
      btn.classList.toggle('d_none');
      otherBtn.classList.toggle('d_none');
    }

function renderLiked(myBooks){
   let liked 
    for (let likedIndex = 0; likedIndex < myBooks.length; likedIndex++) {
      liked = document.querySelector('.like_btn')
      if (myBooks[likedIndex].liked) {
     liked.classList.toggle('d_none')
}

    } 
  }
function init(){
  renderBookSection();
  renderLiked(myBooks)
}

