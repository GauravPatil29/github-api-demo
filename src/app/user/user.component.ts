import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../results';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  @Input() user: User;
  @Input() expanded: Boolean;
  @Output() onclick = new EventEmitter<void>();

  constructor() {
  }

  toggle(){
    this.onclick.emit();
  }

}
