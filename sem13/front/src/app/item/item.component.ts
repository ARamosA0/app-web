import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  items: any[] = [];
  currentItem: any = {};
  showMsgPost: boolean = false;
  showMsgPut: boolean = false;

  constructor(private itemService: ItemService) { }

  formularioPelicula = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    director: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    fecha_estreno: new FormControl('', [Validators.required]),
    imagen: new FormControl('', [Validators.required, Validators.maxLength(1000)]),
    description: new FormControl('', [Validators.required, Validators.maxLength(500)])
  });

  ngOnInit(): void {
    this.getItems();
    console.log(this.currentItem)
  }


  getItems(): void {
    this.itemService.getItems()
      .subscribe((items) => {
        this.items = items;
      });
  }


  getItemById(id: string): void {
    this.itemService.getItemById(id)
      .subscribe((item) => {
        this.currentItem = item;
      });
  }


  createItem(item: any): void {
    console.log(item)
    this.itemService.createItem(item)
      .subscribe(() => {
        this.getItems();
        this.currentItem = {};
        this.showMsgPost = true
      });
  }


  updateItem(id: string, item: any): void {
    this.itemService.updateItem(id, item)
      .subscribe(() => {
        this.getItems();
        this.currentItem = {};
        this.showMsgPut = true
      });
  }


  deleteItem(id: string): void {
    if(confirm("Estas seguro de Eliminar la pelicula?")){
      this.itemService.deleteItem(id)
      .subscribe(() => {
        this.getItems();
      });
    }
  }


  editItem(id: string): void {
    this.getItemById(id);
  }
}
