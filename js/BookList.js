class BookList {
    constructor() {
        this.bookRead = 0; // números de libros leidos
        this.bookNotReadYet = 0; // número de libros no leidos aún
        this.nextBookToRead = null; // referencia al proximo libro a leer
        this.currentBookBeingRead = null; // referencia al libro que se esta leyendo
        this.lastBookRead = null; // referencia al ultimo libro leido
        this.allBooks = []; // array de todos los libros
    }

    addBook(book) {
        this.allBooks.push(book);

        if (!book.read) {
            if (this.bookNotReadYet === 0) {
                this.nextBookToRead = book;
            }
            this.bookNotReadYet++;
        } else {
            if (this.currentBookBeingRead === null) {
                this.currentBookBeingRead = book;
            }
            this.bookRead++;
        }
    }

    finishCurrenBook() {
        if (this.currentBookBeingRead !== null) {
            this.currentBookBeingRead.read = true;
            this.currentBookBeingRead.readDate = new Date(Date.now());
            this.lastBookRead = this.currentBookBeingRead;

            for (let book of this.allBooks) {
                if (!book.read) {
                    this.nextBookToRead = book;
                    break;
                }
            }

            if (this.nextBookToRead !== null) {
                this.currentBookBeingRead = this.nextBookToRead;
                this.nextBookToRead = null;
            }

            this.booksNotReadYet--;
            this.booksRead++;
        }
    }
}

export default BookList;
