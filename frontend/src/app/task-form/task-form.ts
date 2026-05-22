import { Component } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { FormGroup, FormControl } from '@angular/forms'

import { TaskService } from '../services/task'

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.html'
})
export class TaskForm {

  form = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    status: new FormControl('OPEN')
  })

  constructor(private service: TaskService) {}

  submit(): void {

    this.service.addTask(this.form.value)
      .subscribe(() => {

        this.service.getTasks()

        this.form.reset({
          status: 'OPEN'
        })
      })
  }
}