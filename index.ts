import http from 'http';
import fs from 'fs';

const listUsers = (req: http.IncomingMessage, res: http.ServerResponse) => {
    res.writeHead(200, { "content-type": "text/plain" });
    res.write("Comunicacio con el metodo POST")
    res.end()
}

const responseGET = (req: http.IncomingMessage, res: http.ServerResponse) => {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("Comunicacion con el method GET")
}

const responseHTML = (req: http.IncomingMessage, res: http.ServerResponse) => {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>CursosDev</h1>")
    res.end()
}

const responseJSON = (req: http.IncomingMessage, res: http.ServerResponse) => {
    res.writeHead(200, { "content-type": "application/json" });
    res.write('{"name": "cursosDev"}')
    res.end()
}

const responsePDF = (req: http.IncomingMessage, res: http.ServerResponse) => {
    /* res.writeHead(200, {"content-type": "application/pdf"});
        const content = fs.readFileSync(__dirname + "/public/manual.pdf");
        res.write(content);
        res.end() */

    console.log("inicio de lectura de archivo pdf")
    fs.readFile(__dirname + "/public/manual.pdf", (err, content) => {
        if (err) {

            console.log("An error happened")
            res.writeHead(500, { "content-type": "text/plain" });
            res.end("An error happened")
        } else {

            res.writeHead(200, { "content-type": "application/pdf" });
            res.write(content);
            res.end()
            console.log("archivo enviado!")
        }
    })
    console.log("fin del codigo de lectura")
}

const responseNotFound = (req: http.IncomingMessage, res: http.ServerResponse) => {
    res.writeHead(200, { "content-type": "text/plain" });
    res.write("Ruta no especificada")
    res.end()
}

interface Ipath {
    path: string
    method: string
    callback: (req: http.IncomingMessage, res: http.ServerResponse) => void
}

const path: Ipath[] = [
    { path: "/usuarios", method: "POST", callback: listUsers },
    { path: "/usuarios", method: "GET", callback: responseGET },
    { path: "/usuarios/html", method: "GET", callback: responseHTML },
    { path: "/usuarios/json", method: "GET", callback: responseJSON },
    { path: "/usuarios/pdf", method: "GET", callback: responsePDF },
]

const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
    const cb = path.find((path: Ipath) => path.path == req.url && path.method == req.method)?.
        callback

    if (cb) {
        cb(req, res)
    } else {
        responseNotFound(req, res)
    }


    /* if (req.url == "/usuario" && req.method == "POST") {
        listUsers(req, res)
    } else if (req.url == "/usuarios" && req.method == "GET") {
        responseGET(req, res)
    } else if (req.url == "/usuarios/html") {
        responseHTML(req, res)
    } else if (req.url == "/usuarios/pdf") {
        responsePDF(req, res)
    } else if (req.url == "/usuarios/json") {
        responseJSON(req, res)
    } else {
        responseNotFound(req, res)
    } */
})


server.listen(3000, () => {
    console.log("Server running at http://localhost:3000")
})