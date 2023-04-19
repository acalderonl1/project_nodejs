const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-type": "text/plain"})
    res.write("Hola mundo")
    res.end()
    //console.log("Server has answared")
})

server.listen(5300, () => console.log("Server is running on port 5300"))