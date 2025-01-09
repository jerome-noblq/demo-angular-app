import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from "./tasks/task.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor() {
    console.log('Initial constructor');
  }

  ngOnInit() {
    console.log('Initial OnInit');
  }

  users = DUMMY_USERS;

  // setting initial which needs to be initialised
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user)=> user.id == this.selectedUserId);
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
    console.log('selected id: '+id);
  }
}
