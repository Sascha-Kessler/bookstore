

function getBookTemplate(index){
    let book = ourBooks[index];
    
    ;
    
    let booksComments = [];
    for (let indexC = 0; indexC < book.comments.length; indexC++) {
        
        booksComments.push(book.comments[indexC].comment);
          console.table(booksComments)
    }

      let commentsHtml;
  if (booksComments.length === 0) {
    commentsHtml = "<p>No comments yet.</p>";
  } else {
    commentsHtml = "<ul>";
    for (let i = 0; i < booksComments.length; i++) {
      commentsHtml += "<li>" + booksComments[i] + "</li>";
    }
    commentsHtml += "</ul>";
  }

    return `<div class="books_section">
    <h2>${book.name}</h2>
    <img class="template_img" src="./img/template_book.png" alt="templatePic">
    <p>Autor : ${book.author}</p>
    <p>Preis : ${book.price.toFixed(2)} EUR</p>
    <p>Erschienen : ${book.publishedYear}</p>
    <p>Kommentare : ${booksComments}</p> 
    ${commentsHtml}
    </div>`
   
}

