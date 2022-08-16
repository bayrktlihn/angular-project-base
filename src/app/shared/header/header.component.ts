import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() showMenuButtons = true;
  @Output() readonly expandLeftMenuClick = new EventEmitter<void>();

  onClick() {
    this.expandLeftMenuClick.emit();
  }
}
