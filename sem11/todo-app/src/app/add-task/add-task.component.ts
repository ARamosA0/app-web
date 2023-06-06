import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  taskName: string = '';
  taskState: boolean = false;

  @Output() taskAdded: EventEmitter<{tarea: string, estado:boolean}> = new EventEmitter<{tarea: string, estado:boolean}>();

  addTask() {
    const data = {
      tarea: this.taskName,
      estado: this.taskState
    }
    this.taskAdded.emit(data);
    this.taskName = '';
  }
}
