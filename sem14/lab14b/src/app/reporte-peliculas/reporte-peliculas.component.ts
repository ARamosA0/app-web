import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { ExportToCsv } from 'export-to-csv';
@Component({
  selector: 'app-reporte-peliculas',
  templateUrl: './reporte-peliculas.component.html',
  styleUrls: ['./reporte-peliculas.component.css']
})
export class ReportePeliculasComponent implements OnInit {
  peliculas: any[] = [];
  peliculasFiltradas: any[] = []; 

  constructor(private http: HttpClient) {
    (<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
  }

  ngOnInit() {
    this.http.get<any[]>('./assets/peliculas.json').subscribe(data => {
      this.peliculas = data;
      this.peliculasFiltradas = data; 
    });
  }

  generarPDF() {
    const contenido = [
      { text: 'Informe de Películas', style: 'header' },
      { text: '\n\n' },
      {
        table: {
          headerRows: 1,
          widths: ['*', '*', '*'],
          body: [
            ['Título', 'Género', 'Año de lanzamiento'],
            ...this.peliculasFiltradas.map(pelicula => [pelicula.titulo, pelicula.genero, pelicula.lanzamiento.toString()])
          ]
        }
      }
    ];

    const estilos = {
      header: {
        fontSize: 18,
        bold: true,
      },
      tableHeader: {
        bold: true,
        fontSize: 12,
        color: 'black',
        fillColor: '#F2F2F2' // Color de fondo de la fila del encabezado de la tabla
      }
    };

    const documentDefinition = {
      content: contenido,
      styles: estilos
    };

    pdfMake.createPdf(documentDefinition).open();
  }

  filtrarPeliculas(event: any) {
    const genero = event.target.value as string;
    console.log(genero)
    console.log(this.peliculas)
    if (genero === 'todos') {
      this.peliculasFiltradas = this.peliculas;
    } else {
      this.peliculasFiltradas = this.peliculas.filter(pel => pel.genero === genero)
    }
    console.log(this.peliculasFiltradas)
  }

  generarCSV() {
    const data = this.peliculasFiltradas.map(pelicula => ({
      'Título': pelicula.titulo,
      'Género': pelicula.genero,
      'Año de lanzamiento': pelicula.lanzamiento.toString()
    }));
  
    const options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true,
      showTitle: false,
      title: 'Informe de Películas',
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true
    };
  
    const csvExporter = new ExportToCsv(options);
    const csvData = csvExporter.generateCsv(data);
    this.descargarArchivo(csvData, 'informe_peliculas.csv', 'text/csv;charset=utf-8');
  }


}