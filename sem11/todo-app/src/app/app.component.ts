import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tasks: { tarea: string, estado: boolean }[] = [];
  
  addTask(task: { tarea: string, estado: boolean }) {
    console.log(this.tasks);
    this.tasks.push(task);
  }

  changeTaskState(){
  }

  filteringTasks(task: { tarea: string, estado: boolean }[]){
    console.log(task)
    let save: { tarea: string, estado: boolean }[]= task
    this.tasks.splice(0)
    task.forEach(a => {
      this.tasks.push(a);
    })
    console.log(this.tasks)
  }
}
