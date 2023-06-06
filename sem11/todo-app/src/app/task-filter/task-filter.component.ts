import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-filter',
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.css']
})
export class TaskFilterComponent {
  filterValue: string = '';
  @Input() tasks: {tarea: string, estado:boolean}[] = [];
  @Output() filteredData: EventEmitter<{tarea: string, estado:boolean}[]> = new EventEmitter<{tarea: string, estado:boolean}[]>();

  filteringTasks(){
    if (this.filterValue === "todas") {
      this.filteredData.emit(this.tasks)
    } else if (this.filterValue === "completadas"){
      this.filteredData.emit(this.tasks.filter(e => e.estado))
    } else if (this.filterValue === "nocompletadas"){
      this.filteredData.emit(this.tasks.filter(e => !e.estado))
    }
  }
}
