class User {
    // firstname: string
    // lastName: string

    // constructor(firstName: string, lastName: string){
    //     this.firstname = firstName
    //     this.lastName = lastName
    // }

    constructor(public firstName: string, public lastName: string) { }
}

interface UserRepository {
    insert(user: User): User
    getAll(): User[]
}

class UserInfraestructure implements UserRepository {
    insert(user: User): User {
        console.log(user)
        return user
    }
    getAll(): User[] {
        return [new User("Juan", "Perez")]
    }

    trace(user:User){
        console.log(user)
    }

}

class UserApplication{
    constructor(private readonly userRepository: UserRepository){}

    addUser(user: User){
        this.userRepository.insert(user)
    }
}

const userInfraestructure: UserRepository = new UserInfraestructure()
const userApplication = new UserApplication(userInfraestructure)

const user = new User("JOrge", "Avila")
userApplication.addUser(user)