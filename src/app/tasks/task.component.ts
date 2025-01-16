import { Component, Input } from '@angular/core';
import { UserTaskComponent } from "./user-task/user-task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { type NewTaskData } from "./new-task/new-task.model";
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [UserTaskComponent, NewTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {

  @Input({ required: true }) userId!: string
  @Input({ required: true }) name!: string

  isAddingTask = false;

  // dependency injection
  // specify the dependency in the constructor and define the type
  // angular only creates and reuse one instance so the different components ->
  // operates on the same object in memory and on the same data
  constructor(private taskService: TaskService) {}

  get selectedUserTask(){
    return this.taskService.getUserTask(this.userId);
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCancelAddTask(){
    this.isAddingTask = false;
  }

  // onAddTask(taskData: NewTaskData) {
  //   this.isAddingTask = false;
  // }
}
