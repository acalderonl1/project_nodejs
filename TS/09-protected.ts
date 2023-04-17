class User{
    readonly userId: string = "87878s8787s78sf8"
    protected readonly password: string = "7SszUDC6D(!c6wm@"
}

class Developer extends User{
    getPasswordLength(){
        return this.password.length
    }
}

class DeveloperCloud extends Developer{
    constructor(){
        super()
        console.log(this.password)
    }
}


const developer = new Developer()
//console.log(developer.password)
console.log(developer.getPasswordLength())

const developerCloud = new DeveloperCloud()