

function getBookTemplate(index){
    let book = ourBooks[index];
    let booksCommentsUserName = [];
    let booksComments = [];
        for (let indexC = 0; indexC < book.comments.length; indexC++) {
        booksCommentsUserName.push(book.comments[indexC].name);
        booksComments.push(book.comments[indexC].comment);
        }
    
    let commentsHtml;
        if (booksComments.length === 0) {
        commentsHtml = "<p>No comments yet.</p>";
        } else {
        commentsHtml = '<ul>';
        for (let i = 0; i < booksComments.length; i++) {
        commentsHtml += `
            <li>
                <span class="comment_user">${booksCommentsUserName[i] + ":"}</span>
                <span class="comment_text">${booksComments[i]}</span>
            </li>`;
        }
        commentsHtml += '</ul>';
        }

    return `<div class="books_section">
    <h2>${book.name}</h2>
    <img class="template_img" src="./img/template_book.png" alt="templatePic">
    <p>Autor : ${book.author}</p>
    <p>Preis : ${book.price.toFixed(2)} EUR</p>
    <p>Erschienen : ${book.publishedYear}</p>
    ${commentsHtml}
    </div>`
   
}

