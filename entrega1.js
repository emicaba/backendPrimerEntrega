class Usuario{
    constructor(nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = []
        this.mascotas = []
    }

    getFullName(){
        let fullName= `${this.nombre +" "+ this.apellido}`
        return fullName
    };

    addMascota(mascota){
this.mascotas.push(mascota)
    }
    countMascotas(){
        return this.mascotas.length
    }

    addBook(book){
        this.libros.push(book)
    }
    getBookNames(){
        let arr = this.libros.map( (libro)=>{
            return libro.nombre
        })
        return arr
    }
}

const emiliano = new Usuario("emiliano", "cabaña");
const michelle = new Usuario("michelle", "lucero");

console.log(emiliano.getFullName());
emiliano.addMascota("caballo");
emiliano.addMascota("gallina");
console.log(emiliano.countMascotas());
emiliano.addBook({nombre:"A sangre fria", autor:"Truman Capone"});
emiliano.addBook({nombre: "El alquimista", autor: "Paulo Cohelo"});
console.log(emiliano);
console.log(emiliano.getBookNames());
