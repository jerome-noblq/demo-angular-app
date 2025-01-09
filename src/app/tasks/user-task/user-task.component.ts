import { Component, Input } from '@angular/core';

interface TaskDetails {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

@Component({
  selector: 'app-user-task',
  standalone: true,
  imports: [],
  templateUrl: './user-task.component.html',
  styleUrl: './user-task.component.css'
})
export class UserTaskComponent {
  
  @Input({required: true}) taskDetails! : TaskDetails;
}
