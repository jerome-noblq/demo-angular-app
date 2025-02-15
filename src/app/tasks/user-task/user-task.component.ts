import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TaskService } from '../task.service';

// we could store this interface in a separate file: name.module.ts in same folder
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
  imports: [CardComponent, DatePipe],
  templateUrl: './user-task.component.html',
  styleUrl: './user-task.component.css'
})
export class UserTaskComponent {
  
  @Input({required: true}) taskDetails! : TaskDetails;
  // when emitting complete event we need to pass the type
  // @Output() completed = new EventEmitter<string>();

  private taskService = inject(TaskService);

  onCompleteTask() {
    // to share information with parent component we pass id
    this.taskService.removeTask(this.taskDetails.id);
  }

}
