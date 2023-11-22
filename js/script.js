import Book from "./Book.js";
import BookList from "./BookList.js";

window.onload = () => {
    let myBookList = new BookList();

    let tituloInput = document.getElementById("titulo");
    let generoInput = document.getElementById("genero");
    let autorInput = document.getElementById("autor");
    let addButton = document.getElementById("btn");
    let allBooks = document.getElementById("btn-2");

    addButton.addEventListener("click", (e) => {
        e.preventDefault(); // Prevenir la recarga de la página

        let tituloValue = tituloInput.value;
        let generoValue = generoInput.value;
        let autorValue = autorInput.value;

        let newBook = new Book(tituloValue, generoValue, autorValue);

        myBookList.addBook(newBook);

        // Limpiar los campos del formulario para la próxima entrada
        tituloInput.value = "";
        generoInput.value = "";
        autorInput.value = "";
    });

    allBooks.addEventListener("click", () => {
        let displayBooks = document.getElementById("display-books");
        displayBooks.innerHTML = ""; // Limpiar el div antes de añadir nuevos libros

        // Iterar sobre todos los libros en la lista
        myBookList.allBooks.forEach((book, index) => {
            displayBooks.innerHTML += `
            <h3>Libro ${index + 1}:</h3>
            <p>Título: ${book.title}</p>
            <p>Género: ${book.genre}</p>
            <p>Autor: ${book.author}</p>
            <p>Leído: ${book.read ? "Sí" : "No"}</p>
            <p>Fecha de lectura: ${book.readDate}</p>
            <hr>
        `;
        });
    });
};
