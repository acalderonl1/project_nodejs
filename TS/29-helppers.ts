//type Gender = "M" | "F" 

enum Gender {
    M= "M",
    F= "F"
}

interface PatientEssentials{
    name: string
    lastname: string
    email: string
}

interface PatientOptionals{
    id: string
    gender: Gender
    age: number
}

interface PatientUpdate{
    name: string
    lastname: string
    gender: Gender
    email: string
}

type PatientProperties = Required<PatientEssentials> & Partial<PatientOptionals>
type TPatientUpdate = Omit<PatientProperties, "id email">

const essential: Required<PatientEssentials> = {
    name: "Abdon",
    lastname: "Calderon",
    email: "abdon@gmail.com"
}

const optionals: Partial<PatientOptionals> = {
    gender: Gender.F
}

const update: Partial<TPatientUpdate> ={
    name: "Abdon Joel"
}
