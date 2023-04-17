class Animal{
    public raza: string 
    public color: string 
    constructor(){
        this.raza = "perro"
        this.color = "marron"
    }

    obtenerdescripcion(){
        return `Raza: ${this.raza}, Color: ${this.color}`
}
}
const animal = new Animal();

console.log(animal)
console.log("raza", animal.raza)
console.log("color", animal.color)
console.log("descripcion:", animal.obtenerdescripcion())


