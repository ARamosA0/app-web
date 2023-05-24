import { Component } from '@angular/core';
import { FormServiceService } from '../form-service.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  datosForm: any;
  constructor(private formularioService: FormServiceService){
    this.datosForm = this.formularioService.getDatos()
    console.log(this.datosForm)
  }
}
