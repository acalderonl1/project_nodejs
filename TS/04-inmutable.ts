class User{
    private readonly userId: string
    private email: string
    private name: string
    private age:number

    constructor(email: string, name:string, age: number){
        this.userId = Math.random().toString()
        this.email = email
        this.name = name
        this.age = age
    }

    update(email: string, name: string, age: number){
        this.email = "abdon2@email.com"
        this.name = "abdon"
        this.age = 24
    
    }

    /*setEmail(email: string){
        this.email = email
    }*/

}

const user = new User("abdon@email.com", "abdon", 24);
`user.userId = "abcd"
user.email = "email@email.com"
user.name = "Abdon"
user.age = 25`

//procesamiento de user
//user.setEmail("abdon@email.com")
user.update("Abdonnn@wmail.com", "abddd", 25)
console.log(user)