import express, { Application, Request, Response } from "express"
import fs from 'fs';

const users = [
    { id: 0, name: 'John', active: true },
    { id: 1, name: 'John1', active: false },
    { id: 2, name: 'John3', active: true },
    { id: 3, name: 'John4', active: false },
]


class App {
    public app: Application

    constructor() {
        this.app = express();
        this.handleMiddleware();
        this.handleRoute();
    }

    handleMiddleware() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    handleRoute() {
        this.app.post("/usuarios", this.listUsers)
        this.app.get("/usuarios", this.responseGET)
        this.app.get("/usuarios/html", this.responseHTML)
        this.app.get("/usuarios/json", this.responseJSON)
        this.app.get("/usuarios/pdf", this.responsePDF)
        this.app.post("/usuarios/insert", this.insertUser)
        this.app.get("/usuarios/:active", this.filterUserByActive)
    }

    insertUser(req: Request, res: Response) {
        //console.log("user:", user)
        const { name } = req.body
        const user = { id: users.length, name, active: true }

        users.push(user)

        res.json(users)

        /* res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify(users)); */
    }

    filterUserByActive(req: Request, res: Response) {
        //const active = req.params.active
        const { active } = req.params;
        //console.log(typeof active)
        const filter = active == "1" ? true : false
        const usersFilter = users.filter((user) => user.active == filter)

        res.writeHead(200, { "Content-Type": "application/json" })
        res.json(usersFilter)
    }

    listUsers(req: Request, res: Response) {
        res.status(200).type("text/plain").send("List users")

        /* res.writeHead(200, { "content-type": "text/plain" });
        res.write("Comunicacio con el metodo POST")
        res.end() */
    }

    responseGET(req: Request, res: Response) {
        res.send("Comunicacion con el method GET")

        /* res.writeHead(200, { "content-type": "text/html" });
        res.end("Comunicacion con el method GET") */
    }

    responseHTML(req: Request, res: Response) {
        res.send("<h1>La pajarra y Cuchi se aman</h1>")
        /* res.writeHead(200, { "content-type": "text/html" });
        res.write("<h1>La pajarra y Cuchi se aman</h1>")
        res.end() */
    }

    responseJSON(req: Request, res: Response) {
        res.json('{"name": "cursosDev"}')
        /* res.writeHead(200, { "content-type": "application/json" });
        res.write('{"name": "cursosDev"}')
        res.end() */
    }

    responsePDF(req: Request, res: Response) {
        //console.log("inicio de lectura de archivo pdf")
        fs.readFile(__dirname + "/public/manual.pdf", (err, content) => {
            if (err) {
                res.status(500).send("An error happened")
                /* console.log("An error happened")
                res.writeHead(500, { "content-type": "text/plain" });
                res.end("An error happened") */
            } else {
                res.type("application/pdf").send("archivo enviado!")
                /* res.writeHead(200, { "content-type": "application/pdf" });
                res.write(content);
                res.end()
                console.log("archivo enviado!") */
            }
        })
        //console.log("fin del codigo de lectura")
    }

    responseNotFound(req: Request, res: Response) {
        res.send("Ruta no especificada")
        /* res.writeHead(200, { "content-type": "text/plain" });
        res.write("Ruta no especificada")
        res.end() */
    }

}

const app = new App().app
export { app }