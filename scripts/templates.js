function getBookTemplate(index){
    let book = ourBooks[index];
    

    return `<div class="books_section">
    <h2>${book.name}</h2>
    <img class="template_img" src="./img/template_book.png" alt="templatePic">
    <p>Autor : ${book.author}</p>
    <p>Preis : ${book.price.toFixed(2)} EUR</p>
    <p>Erschienen : ${book.publishedYear}</p>
    
    </div>`
   
}

