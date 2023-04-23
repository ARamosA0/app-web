var http = require('http');
fs = require('fs');




http.createServer(function(req, res){
    let page = './index.html'
    // fs.readFile('./index.html', function(err,html){
    //     console.log("Servidor Iniciando")
    //     console.log("url",req.url)
    //     res.write(html)
    //     res.end()
    // })
    console.log("url",req.url)
    
    switch (req.url) {
        case "/index":
            fs.readFile('./index.html', function(err,html){
                console.log("aaaServidor Iniciando")
                res.write(html)
                res.end()
            })
            break;
        case "/nosotros":
            fs.readFile('./nosotros.html', function(err,html){
                console.log("aaaServidor Iniciando")
                res.write(html)
                res.end()
            })
        case "/catalogo":
            fs.readFile('./catalogo.html', function(err,html){
                console.log("Servidor Iniciando")
                res.write(html)
                res.end()
            })
            break;
        case "/servicios":
            fs.readFile('./servicios.html', function(err,html){
                console.log("Servidor Iniciando")
                res.write(html)
                res.end()
            })
        case "/contacto":
            fs.readFile('./contacto.html', function(err,html){
                console.log("Servidor Iniciando")
                res.write(html)
                res.end()
            })
            break;
        default:
            break;
    }
}).listen(9090)
