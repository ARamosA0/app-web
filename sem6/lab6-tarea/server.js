const express = require('express');
const app = express();

// Configurar el motor de plantillas
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));

const info = {
    nombre: 'Aldo Ramos',
    email: 'info@website.com',
    telefono: '+ (123) 456-7890',
    direccion: '12345 Fake ST NoWhere AB Country'
}

const experiencia = [{
        ano: '2022 - 2023',
        trabajo: 'FrontEnd',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum recusandae, cupiditate ullam dolor ratione repellendus.aliquid repudiandae saepe!.'
    },
    {
        ano: '2023 - Presente',
        trabajo: 'Backend',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum recusandae, cupiditate ullam dolor ratione repellendus.aliquid repudiandae saepe!.'
    }
]

const estudios = [{
        ano: '2021 - Presente',
        trabajo: 'Tecsup - Diseno y Desarrollo de Software',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum recusandae, cupiditate ullam dolor ratione repellendus.aliquid repudiandae saepe!.'
    },
    {
        ano: '2022',
        trabajo: 'Bootcapt FullStack',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum recusandae, cupiditate ullam dolor ratione repellendus.aliquid repudiandae saepe!.'
    },
    {
        ano: '2015 - 2021',
        trabajo: 'Bachiller Arquitectura',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum recusandae, cupiditate ullam dolor ratione repellendus.aliquid repudiandae saepe!.'
    },
]

const habilidades= [{
        leng: 'html5 & CSS3',
        por: '95%'
        },
        {
            leng: "JavaScript",
            por: '80%'
        },
        {
            leng:"React",
            por:"70%"
        },
        {
            leng:"SQL",
            por:"80%"
        },
        {
            leng: "Python",
            por:"90%"
        },
        
]
app.get('/', (req, res) => {
    res.render('index', {
        info: info
    });
});
app.get('/habilidades', (req, res) => {
    res.render('habilidades', {
        info: info,
        exp: experiencia,
        est: estudios,
        hab: habilidades
    });
});
app.get('/contacto', (req, res) => {
    res.render('contacto', {
        info: info,
    });
});
// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Aplicación web dinámica ejecutándose en el puerto 3000');
});