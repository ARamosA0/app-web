const express = require("express");
const multer = require("multer");
const app = express();
const upload = multer({ dest: "uploads/" }); // Directorio donde se guardarán los archivos adjuntos

const validateImage = (req, res, next) => {
    if (!req.files) {
      return res.status(400).json({ error: 'Se requieren archivos para subir.' });
    }
  
    const validFiles = req.files.filter(file => file.mimetype === 'image/jpeg');
    if (validFiles.length !== req.files.length) {
      return res.status(400).json({ error: 'Se requieren archivos en formato JPEG.' });
    }
  
    const maxSize = 5 * 1024 * 1024; // 5 MB
    const oversizedFiles = req.files.filter(file => file.size > maxSize);
    if (oversizedFiles.length > 0) {
      return res.status(400).json({ error: 'Los archivos no pueden superar los 5 MB de tamaño.' });
    }
  
    next();
  };

  app.post("/upload", upload.array("files", 5), validateImage, (req, res) => {
    try{
    const fileInfos = req.files.map(file => ({
      filename: file.filename,
      originalname: file.originalname,
      size: file.size,
      mimetype: file.mimetype,
    }));
    res.send(fileInfos);
    } catch (error){
        console.log(error)
    }
  });

app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
