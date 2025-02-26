//Task 1- Creating a book class 
class Book {
    constructor(title, author, isbn, copies) { // initializing book properties 
      this.title = title;
      this.author = author;
      this.isbn = isbn;
      this.copies = copies;
    }
  
    getDetails() { //used to make a formatted string out of book details 
      return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`;
    }
  
    updateCopies(quantity) {
      this.copies += quantity;
    }
  }
  
  // Test Cases
  const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
  console.log(book1.getDetails()); // Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"
  
  book1.updateCopies(-1);
  console.log(book1.getDetails()); // Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"
  
//Task 2- Creating a borrower class 
class Borrower {
    constructor(name, borrowerId) { // Initializing borrower properties
      this.name = name;
      this.borrowerId = borrowerId;
      this.borrowedBooks = [];
    }
  
    
    borrowBook(book) {// adds book title to borrowedBooks array
      this.borrowedBooks.push(book);
    }
  
   
    returnBook(book) { // removes book title from borrowedBooks array
      this.borrowedBooks = this.borrowedBooks.filter(b => b !== book);
    }
  }
  
  // Test Cases
  const borrower1 = new Borrower("Alice Johnson", 201);
  borrower1.borrowBook("The Great Gatsby");
  console.log(borrower1.borrowedBooks); // Expected output: ["The Great Gatsby"]
  
  borrower1.returnBook("The Great Gatsby");
  console.log(borrower1.borrowedBooks); // Expected output: []
  
  //Task 3- Creating a library class
  class Library {
    constructor() { // Initializing library properties
      
      this.books = [];
      this.borrowers = [];
    }
  
    addBook(book) {  // add a new book to the library
      this.books.push(book);
    }
    //Task 4- Implementing Book Borrowing 
    registerBorrower(borrower) {
        this.borrowers.push(borrower);
    }

    lendBook(borrowerId, isbn) { // allows a book to be borrow if it is available 
        const book = this.books.find(b => b.isbn === isbn);
        const borrower = this.borrowers.find(b => b.id === borrowerId);
        
        if (!book) {
            console.log("Book not found.");
            return;
        }
        
        if (book.copies < 1) {
            console.log("No copies available.");
            return;
        }
        
        if (!borrower) {
            console.log("Borrower not found.");
            return;
        }
        
        book.copies -= 1; //reduce available copies by 1 
        borrower.borrowedBooks.push(book.title);
        console.log(`Book borrowed successfully: ${book.title}`);
    }

    listBooks() {
      this.books.forEach(book => console.log(book.getDetails()));
    }
  }
  
  // Test Cases
  const library = new Library();
  library.addBook(new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 4));
  library.listBooks();
  // Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

//Task 4- Implementing Book Borrowing test cases 
library.lendBook(201, 123456);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 3"
console.log(borrower1.borrowedBooks);
// Expected output: ["The Great Gatsby"]

