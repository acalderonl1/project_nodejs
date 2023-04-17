// domain
class Patient {
    firstName: String = ""
    lastName: String = ""
    age: number =0
}

interface PatientRepository {
    create(patient: Patient): Patient
}

//Application
class PatientAppLication{

    infra: PatientRepository
    constructor(infra: PatientRepository){
        this.infra = infra
    }

    add(patient: Patient){
        return this.infra.create(patient)
    }
}

//infrastructure
class patientInfrastructure implements PatientRepository{
    create(patient: Patient){
        this.validate()
        this.sentMessage("Bienvenido")
        return patient
    }
    validate(){
        return true
    }
    sentMessage(message: string){
        return message
    }
    sentInformationAPI(name: string){}
}

const firstName = "Abdon"
const lastName = "Calderon"
const age = 24

const patient = new Patient()
patient.firstName = firstName
patient.lastName = lastName
patient.age = age

const infra:PatientRepository = new patientInfrastructure()
const application = new PatientAppLication(infra)
const patientCreate = application.add(patient)

console.log(patientCreate)
