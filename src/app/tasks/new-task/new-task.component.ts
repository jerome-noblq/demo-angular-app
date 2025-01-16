import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from './new-task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-task',
  // standalone: true,
  // to use ngModel we need to import FormModule
  // imports: [ FormsModule ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Input({required: true}) userId! : string 

  @Output() close = new EventEmitter<void>()
  // @Output() add = new EventEmitter<NewTaskData>()

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  // alternate to constructor based approach used in task.service.ts,
  // we use inject method here in this file
  private taskService = inject(TaskService)

  onCancel(){
    this.close.emit();
  }

  onSubmit(){
    this.taskService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    }, this.userId)
    this.close.emit();
  }

}
