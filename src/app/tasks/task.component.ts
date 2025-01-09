import { Component, Input } from '@angular/core';
import { UserTaskComponent } from "./user-task/user-task.component";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [UserTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {
  @Input() name?: string
}
