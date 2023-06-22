const express = require("express");
const multer = require("multer");
const app = express();
const upload = multer({ dest: "uploads/" }); // Directorio donde se guardarán los archivos adjuntos

const validateImage = (req, res, next) => {
    if (!req.file || req.file.mimetype !== 'image/jpeg') {
      return res.status(400).json({ error: 'Se requiere una imagen en formato JPEG.' });
    }
  
    if (req.file.size > 5 * 1024 * 1024) { // 5 MB
      return res.status(400).json({ error: 'El tamaño máximo permitido es de 5 MB.' });
    }
  
    next();
  };

app.post("/upload", upload.single("file"), validateImage, (req, res) => {
  const fileInfo = {
    filename: req.file.filename,
    originalname: req.file.originalname,
    size: req.file.size,
    mimetype: req.file.mimetype,
  };
  res.send(fileInfo);
});

app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
