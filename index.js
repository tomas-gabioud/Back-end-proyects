class usuario {
    constructor(name, surName, books, pets) {
        this.nombre = name;
        this.apellido = surName;
        this.libros = books;
        this.mascotas = pets;
    }
    getFullName() {
        return this.nombre + ' ' + this.apellido;
    }
    addMascotas(pet) {
        this.mascotas.push(pet);
    }
    countMascotas() {
        console.log((this.mascotas).length);
    }
    addBook(Libro, Autor) {
        this.libros.push({ Libro, Autor });
    }
    getBookName() {
        this.libros.map((elemento) => {
            console.log(`${elemento.Libro}`);
        });
    }
    getBookNamesTwo() {
        this.libros.map((element) => {
            return element.Autor;
        });
    }
}






let user = new usuario("Tomas", "Gabioud", [{ Libro: 'Game of thrones', Autor: 'George R. R. Martin' },
{ Libro: 'Harry Potter', Autor: 'J. K. Rowling' },
{ Libro: 'El Señor de los anillos', Autor: 'J. R. R. Tolkien' }],
    ['Perro', 'Gato']);


console.log(user.getFullName());
user.addMascotas('Hamster');
user.countMascotas();
user.addBook('Narnia', 'C. S. Lewis');
user.addBook('Orgullo y prejuicio', 'Jane Austen');
user.getBookName()
console.log(user.getBookNamesTwo());
console.log(user);




