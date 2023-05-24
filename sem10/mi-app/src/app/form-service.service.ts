import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class FormServiceService {
  private datosFormulario: any;
  constructor() { }
  setDatos(datos: any){
    this.datosFormulario = datos
  }
  getDatos(){
    return this.datosFormulario
  }
  // enviarForm(datos: any, rutaDestino: string){
  //   this.router.navigate([rutaDestino], {state: {datosFormulario: datos}})
  // }
}
