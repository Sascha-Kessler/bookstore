
function getBooksTemplate(myBookIndex){
    let book = myBooks[myBookIndex];
    
    return `<div class="books_section">
                <h2>${book.name}</h2>
                <img class="template_img" src="./img/template_book.png" alt="book_png">
                
                <div class="book_info">
                    <ul>
                        <li>Preis: ${book.price.toFixed(2)} €</li>
                        <li>Author: ${book.author}</li>
                        <li>Genre: ${book.genre}</li>
                        <li>Erschienen: ${book.publishedYear}</li>
                    </ul>
                    <div>
                    <img onclick="toggleLike(this);" class="like_btn" src="./img/likeBtn.png" alt="like_button">
                    <img onclick="toggleLike(this)" class="like_btn d_none" src="./img/likeBtnLiked.png" alt="like_button_liked">
                    <p>${book.likes}</p>
                    </div>
                </div>               
            </div>`
}