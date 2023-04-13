function Book(title, author, pages, read = false)  {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
    return `Title: ${this.title}\nAuthor: ${this.author}\nPages: ${this.pages}\nRead: ${this.read}`
    } 
}

// const book1 = new Book('The Hobbit', 'J. R. R. Tolkien', '285');
const book2 = new Book('The Hobbit', 'J. R. R. Tolkien', '285', true);
console.log(book2.info());https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript