
//modificdor Private
class Animal{
    private raza: string 
    private color: string 
    constructor(pRaza: string, pColor: string){
        this.raza = "perro"
        this.color = "marron"
    }

    obtenerdescripcion(){
        return `Raza: ${this.raza}, Color: ${this.color}`
}
}
const animal = new Animal("Siames", "Cafe");

console.log(animal)
console.log("raza", animal.raza)
console.log("color", animal.color)
console.log("descripcion:", animal.obtenerdescripcion())
