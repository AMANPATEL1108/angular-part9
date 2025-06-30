import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  // @Input() user: string = '';
  // @Input() city: string = '';
  //reuse Components
  // @Input() user: string = '';
  // <!-- //child to Parent -->

  @Output() getUsers = new EventEmitter();

  users = ['anil', 'aman', 'dev', 'fsds', 'devvv'];

  // ngOnInit() {
  //   this.getUsers.emit(this.users);
  // }

  loadData() {
    this.getUsers.emit(this.users);
  }
}
