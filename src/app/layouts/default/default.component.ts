import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})
export class DefaultComponent implements OnInit {
  openLeftMenu = true;

  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    this.openLeftMenu = !this.openLeftMenu;
  }
}
