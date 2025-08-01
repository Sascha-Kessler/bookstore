
let booksKeys = Object.keys(books);
let myBooks = [];

function init(){
  renderBookSection();
  renderLiked(myBooks);
  
}

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
    let likeCounter = btn.closest('.books_section');
    
    likeCounter = btn.parentElement.querySelector('.like_counter');
    if (btn.classList.contains('d_none')) {
        otherBtn = btn.parentElement.querySelector('.like_btn:not(.d_none)');   
    } else {
        otherBtn = btn.parentElement.querySelector('.like_btn.d_none');  
    }
    
      btn.classList.toggle('d_none');
      otherBtn.classList.toggle('d_none');
    
      if (btn.classList.contains('like_btn_liked')) {
        likeCounter.innerHTML --;
      }else{
        likeCounter.innerHTML ++;
      }
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


