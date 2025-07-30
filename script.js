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

function renderLiked(booksArray){
   let liked = document.querySelectorAll('.books_section');

    for (let likedIndex = 0; likedIndex < booksArray.length; likedIndex++) {
      let [emptyBtn, filledBtn] = liked[likedIndex].querySelectorAll('.like_btn');

        if (booksArray[likedIndex].liked) {
              emptyBtn.classList.add('d_none');
              filledBtn.classList.remove('d_none');
        } else{
              emptyBtn.classList.remove('d_none');
              filledBtn.classList.add('d_none');
              }
    } 
  }
function init(){
  renderBookSection();
  renderLiked(myBooks)
}

