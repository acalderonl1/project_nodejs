const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    /* codigos de repuestas 
    || 10x -> informativos
    || 20x -> respuestas sin errores
    || 30x -> redirecciones
    || 40x -> errores del cliente
    || 50x -> errores del servidor
    */

    if(req.url == "/usuario"){
        res.writeHead(200, {"content-type": "text/plain"});
        res.write("esta es mi primera linea de respuesta")
        res.write("esta es mi segunda linea")
        res.end()
    }else if(req.url == "/usuarios/html"){
        res.writeHead(200, {"content-type": "text/html"});
        res.write("<h1>CursosDev</h1>")
        res.end()
    }else if(req.url == "/usuarios/pdf"){
        /* res.writeHead(200, {"content-type": "application/pdf"});
        const content = fs.readFileSync(__dirname + "/public/manual.pdf");
        res.write(content);
        res.end() */

        console.log("inicio de lectura de archivo pdf")
        fs.readFile(__dirname + "/public/manual.pdf", (err, content) => {
            if(err){

                console.log("An error happened")
                res.writeHead(500, {"content-type": "text/plain"});
                res.end("An error happened")
            }else{
                
                res.writeHead(200, {"content-type": "application/pdf"});
                res.write(content);
                res.end()
                console.log("archivo enviado!")
            }
        })
        console.log("fin del codigo de lectura")
    }else if(req.url == "/usuarios/json"){
        res.writeHead(200, {"content-type": "application/json"});
        res.write('{"name": "cursosDev"}')
        res.end()
    }else{
        res.writeHead(200, {"content-type": "text/plain"});
        res.write("Ruta no especificada")
        res.end()
    }

});

server.listen(3000, ()=>console.log("Server is running on port 3000"))