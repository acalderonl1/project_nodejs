type MedicProperties={
    name: string
    lastname: string
    cmp: string
    email: string
    specialty: string
    subSpecialty: string
}

class Medic {
    name: string
    lastname: string
    cmp: string
    email: string
    specialty: string
    subSpecialty: string

    // constructor(name: string, lastname: string, cmp: string, email:string, specialty: string, subSpecialty: string){
       constructor(properties: MedicProperties){

        this.name = properties.name
        this.lastname = properties.lastname
        this.cmp = properties.cmp
        this.email = properties.email
        this.specialty = properties.specialty
        this.subSpecialty = properties.subSpecialty
    }
}

const properties: MedicProperties = {
    name: "abdon",
    lastname: "calderon",
    cmp: "asd-444",
    email: "abdon@mail.com",
    specialty: "cardiologo",
    subSpecialty: "cardiologo hereatrico"
}

const medic = new Medic(properties)
console.log(medic)
// const medic = new Medic("Jorge", "Lozada", "as998", "abdo@email.com", "Cardiologo", "cardiologo-pediatrico")