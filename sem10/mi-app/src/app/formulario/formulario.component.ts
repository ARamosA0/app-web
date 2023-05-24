import { Component } from '@angular/core';
import { FormServiceService } from '../form-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nombre: string = '';
  email: string = '';
  inputCorrect: boolean = false;
  datosForm: any = {}

  constructor(private formService: FormServiceService, private router: Router){}

  validarCampos(){
    if (this.nombre && this.email) {
        this.inputCorrect = true
        console.log(' OK')
    } else {
      this.inputCorrect = false
      console.log('no OK')
    }
  }
  confirmarEnvio(){
    if(window.confirm('Estas seguro?')){
      this.datosForm.nombre = this.nombre
      this.datosForm.email = this.email
      this.onSubmit()
    }
  }
  onSubmit() {
    console.log('Formulario enviado');
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Email: ${this.email}`);
    this.formService.setDatos(this.datosForm)
    this.router.navigate(['result/'])
  }
}
