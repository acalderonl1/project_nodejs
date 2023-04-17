interface UserEssentials{
    userId: string
    firstName: string
    lastName: string
    email: string
}

interface UserOptionals{
    age: number
    gender: boolean
    tall: number
}

type UserProperties = Required<UserEssentials> & Partial<UserOptionals>

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
    firstName: "Abdon",
    lastName: "calderon",
    age: 30,
    gender: false,
    email: "abdon@email.com",
    tall: 180
}
const user = new User(properties)

console.log(user)