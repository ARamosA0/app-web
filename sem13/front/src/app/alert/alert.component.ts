import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  @Input() color!: string;
  @Input() mensaje!: string;

  constructor() { }

  ngOnInit(): void {
  }
}
