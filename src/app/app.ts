import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './user/user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, User],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'angular-part9';

  // userName = 'Aman Pateel';

  // onUserChange(user: string) {
  //   this.userName = user;
  // }

  //--------------Reuse Components

  // users = ['anil', 'aman', 'dev', 'fsds'];

  // <!-- //child to Parent -->

  users: undefined | string[];

  handleUsers(user: string[]) {
    console.log(user);
    this.users = user;
  }
}
