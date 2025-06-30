var form = document.querySelector("form");
var addButton = document.getElementById("first-button");
var xButton = document.getElementById("x");
var booksContainer = document.getElementById("books-container");
var instructions = document.getElementById("instructions");

addButton.addEventListener("click", () => {
    form.classList.remove("hidden");
});

xButton.addEventListener("click", () => {
    form.classList.add("hidden");
});

function Book(title, author, remarks, id) {
        this.title = title;
        this.author = author;
        this.remarks = remarks;
        this.id = id;
    }

var books = []

function createBookCard(book) {

    var card = document.createElement("div");
    card.classList.add("book-card");

    var titleAuthor = document.createElement("div");
    titleAuthor.classList.add("title-author");
    

    var divTitle = document.createElement("p");
    divTitle.classList.add("book-card-title");
    titleAuthor.textContent = book.title;

    var divAuthor = document.createElement("p");
    divAuthor.classList.add("book-card-author");
    divAuthor.textContent = book.author;

    var divRemarks = document.createElement("p");
    divRemarks.classList.add("book-card-remarks");
    divRemarks.textContent = book.remarks;

    card.appendChild(titleAuthor);
    titleAuthor.appendChild(divTitle);
    titleAuthor.appendChild(divAuthor);
    card.appendChild(divRemarks);

    return card

}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let title = document.getElementById("title").value.trim();
    let author = document.getElementById("author").value.trim();
    let remarks = document.getElementById("remarks").value.trim();
    let id = crypto.randomUUID();

    let book = new Book(title, author, remarks, id);
    bookCard = createBookCard(book);
    books.push(bookCard);

    for (const book of books) {
        form.classList.add("hidden");
        addButton.classList.add("hidden");
        instructions.classList.add("hidden");
        booksContainer.appendChild(book);
    }
  
});

