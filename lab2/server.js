const http = require('http');
const fs = require('fs')
const qs = require('querystring');

const hostname = '127.0.0.1';
const port = 2020;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  console.log(req.url)
  switch (req.url) {
    case "/":
      fs.readFile('./index.html', function (err, html) {
        console.log(req.url)
        res.write(html)
        res.end()
      })
      break;
    case "/nosotros":
      fs.readFile('./nosotros.html', function (err, html) {
        res.write(html)
        res.end()
      })
    case "/servicios":
      fs.readFile('./servicios.html', function (err, html) {
        res.write(html)
        res.end()
      })
    case "/contacto":
      if (req.method === 'GET') {
        fs.readFile('./contacto.html', function (err, html) {
          res.write(html)
          req.method
          res.end()
        })
      }
      if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
          body += chunk.toString();
        });
        console.log(body)
        req.on('end', () => {
          const data = qs.parse(body);
          console.log("data",data)
          res.writeHead(200, {
            'Content-Type': 'text/html'
          });
          res.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Muy Pronto nos pondremos en contacto</title>
          </head>
          <body>
            <h1>Datos del formulario</h1>
            <p>Nombre: ${data.nombre}</p>
            <p>Email: ${data.email}</p>
            <p>Telefono: ${data.telefono}</p>
            <p>Fecha: ${data.fecha}</p>
            <p>Mensaje: ${data.mensaje}</p>
          </body>
        </html>
      `);
          res.end();
        });
      }
      break;
    default:
      break;
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});