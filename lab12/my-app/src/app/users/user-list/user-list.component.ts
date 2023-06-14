import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users = [
    { id: 1, name: 'Nombre 1', content: 'Descripcion del usuario 1' },
    { id: 2, name: 'Nombre 2', content: 'Descripcion del usuario 2' },
    { id: 3, name: 'Nombre 3', content: 'Descripcion del usuario 3' },

  ];
}
