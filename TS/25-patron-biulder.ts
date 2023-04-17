class MedicBuilder{
    name: string  = ""
    lastname: string = ""
    cmp: string = ""
    email: string = ""
    specialty: string = ""
    subSpecialty: string  = ""

    addName (name: string): MedicBuilder{
        this.name = name
        return this
    }

    addLastname (lastname: string): MedicBuilder{
        this.lastname = lastname
        return this
    }

    addCmp (cmp: string): MedicBuilder{
        this.cmp = cmp
        return this
    }

    addEmail (email: string): MedicBuilder{
        this.email = email
        return this
    }

    addSpecialty (specialty: string): MedicBuilder{
        this.specialty = specialty
        return this
    }

    addSubSpecialty (subSpecialty: string): MedicBuilder{
        this.subSpecialty = subSpecialty
        return this
    }

    create(): Medic{
        return new Medic(this)
    }
}

interface IMedic{
    name: string
    lastname: string
    cmp: string
    email: string
    specialty: string
    subSpecialty: string
}

class Medic{
    name: string
    lastname: string
    cmp: string
    email: string
    specialty: string
    subSpecialty: string

    constructor (properties: IMedic){
        this.name = properties.name
        this.lastname = properties.lastname
        this.cmp = properties.cmp
        this.email = properties.email
        this.specialty = properties.specialty
        this.subSpecialty = properties.subSpecialty
    }
}

// const properties: IMedic = {
//     name: "juan",
//     lastname: "perez",
//     cmp: "sdf-77",
//     email: "juan.perez@gmail.com",
//     specialty: "cardiologo",
//     subSpecialty: "cardiologo infantil"
// }

const properties = new MedicBuilder()
const medic = properties
properties
.addName("Juan")
.addLastname("Perez")
.addCmp("asds-444")
.addEmail("juan.perez@gmail.com")
.addSpecialty("Cardiologo")
.addSubSpecialty("cardiologo hereatrico")
.create()

console.log(medic)

//const medic = new Medic(properties)