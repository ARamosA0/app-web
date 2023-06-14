import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  userId: number = 0;
  user: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = +params['id']; 
      this.user = this.getPostDetails(this.userId);
    });
  }

  getPostDetails(id: number) {
    return {
      id: id,
      title: `Usuario ${id}`,
      content: `Descripcion del Usuario ${id}`
    };
  }
}
