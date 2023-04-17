class Database{
    static protocol = "http"
    static getConnectionString(host: string, username:string, password:string):string{
        return `${this.protocol}//${host}/${username}:${password}`
    }
}

console.log(Database.getConnectionString("localhost", "user01", "dios"))