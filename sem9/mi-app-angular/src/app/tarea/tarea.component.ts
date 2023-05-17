import { Component } from '@angular/core';


@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent {
  listaTarea: string[] = []
  constructor(){}
  ngOnInit(): void {
  }

  agregar(addTarea: string): void {
    this.listaTarea.push(addTarea)
  }
}
