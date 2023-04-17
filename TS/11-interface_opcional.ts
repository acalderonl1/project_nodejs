interface UserProperties{
    userId : string
    firsName: string
    lastname: string
    age?: number
    gender?: boolean
    email: string
    tall?: number
}

class User{
    private readonly userId: string
    private firstName: string
    private lastname: string
    private age: number
    private gender: boolean
    private readonly email: string
    private tall: number

    constructor(properties: UserProperties){
        Object.assign(this, properties)
        // this.userId = properties.userId
        // this.firstName = properties.firsName
        // this.lastname = properties.lastname
        // this.age = properties.age
        // this.gender = properties.gender
        // this.email = properties.email
        // this.tall = properties.tall
    }
}

const properties: UserProperties = {
    userId: "5465456s46s54s5",
    firsName: "Abdon",
    lastname: "calderon",
    //age: 30,
    //gender: false,
    email: "abdon@email.com",
    //tall: 180
}
const user = new User(properties)

console.log(user)