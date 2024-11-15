function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    Book.prototype.displayInfo = function() {
        console.log(this.title, this.author, this.pages);
    }
}

let library = []

function add(book) {
    library.push(book);
}

function searchTitle(title) {
    let book = library.find(book => book.title.toLowerCase().includes(title.toLowerCase()));
    return book
}

function searchAuthor(author) {
    let book = library.find(book => book.author.toLowerCase().includes(author.toLowerCase()));
    return book
}

function filters() {
    let books = library.filter(book => book.pages < 100)
    if (books) {
        return books
    } else {
        console.log("Books not found")
    } 
}

function maps() {
    return arr = library.map(book => {
        return {
            "Title": book.title,
            "Author": book.author
        }
    });
}

let mazeRunner = new Book("The Maze Runner", "James Dashner", 375);
let lottery = new Book("The Lottery", "Shirley Jackson", 16);


mazeRunner.displayInfo()

add(mazeRunner);
add(lottery);
console.log(library);


console.log(searchTitle("The Maze Runner"));

console.log(filters());

console.log(maps());