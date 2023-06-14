import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  postId: number = 0;
  post: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.postId = +params['id']; 
      this.post = this.getPostDetails(this.postId);
    });
  }

  getPostDetails(id: number) {
    return {
      id: id,
      title: `Publicación ${id}`,
      content: `Contenido de la publicación ${id}`
    };
  }
}