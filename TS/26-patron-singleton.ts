class Database{
    private host :string 
    private username: string
    private password: string 

    private static instance: Database

    private constructor(host: string, username: string, password:string){
        this.host = host
        this.username = username
        this.password = password
    }

    static create(host: string, username: string, password: string){
        if(!this.instance){
            this.instance = new Database(host, username, password)
        }

        return this.instance
    }
    
}

const database = Database.create("localhost", "user01", "12345")
console.log(database)
const database01 = Database.create("rd.amazon.com", "admin", "root")
console.log(database01)