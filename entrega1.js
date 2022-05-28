class Usuario{
    constructor(nombre, apellido, libros = [], mascotas = []){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }

    getFullName(){
        let fullName= `${this.nombre} ${this.apellido}`
        return fullName
    };

    addMascota(mascota){
this.mascotas.push(mascota)
    }
    countMascotas(){
        return this.mascotas.length
    }

    addBook(bookName, bookAutor){
        this.libros.push({nombre:bookName, autor:bookAutor})
    }
    getBookNames(){
        let arr = this.libros.map( (libro)=>{
            return libro.nombre
        })
        return arr
    }
}

const emiliano = new Usuario("emiliano", "cabaña",);
const michelle = new Usuario("michelle", "lucero");

console.log(emiliano.getFullName());
emiliano.addMascota("caballo");
emiliano.addMascota("gallina");
console.log(emiliano.countMascotas());
emiliano.addBook("A sangre fria","Truman Capone");
emiliano.addBook("El alquimista", "Paulo Cohelo");
console.log(emiliano);
console.log(emiliano.getBookNames());

