
function getBooksTemplate(myBookIndex){
    let book = myBooks[myBookIndex];
    let commentHTML = "";

    for (let index = 0; index < book.comments.length; index++) {
        commentHTML += `<ul class="comment_list">
                            <li>${book.comments[index].name}:</li>
                            <li>${book.comments[index].comment}</li>
                        </ul>`;
        
    }

    return `<div class="books_section">
                <h2>${book.name}</h2>
                <img class="template_img" src="./img/template_book.png" alt="book_png">
                
                <div class="book_info">
                <div class="info_section">    <ul>
                        <li>Preis: ${book.price.toFixed(2)} €</li>
                        <li>Author: ${book.author}</li>
                        <li>Genre: ${book.genre}</li>
                        <li>Erschienen: ${book.publishedYear}</li>
                    </ul>
                    <div>
                    <img onclick="toggleLike(this);" class="like_btn" src="./img/likeBtn.png" alt="like_button">
                    <img onclick="toggleLike(this)" class="like_btn d_none like_btn_liked" src="./img/likeBtnLiked.png" alt="like_button_liked">
                    <p class="like_counter">${book.likes}</p>
                    </div> </div>
                    <div id="comment_Section" class="comments_section">
                        <h2>Kommentare</h2>
                        ${commentHTML}
                    </div>
                </div>               
            </div>`         
}