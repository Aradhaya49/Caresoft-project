import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TaskService } from '../services/task'
import { TaskForm } from '../task-form/task-form'

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    TaskForm
  ],
  templateUrl: './dashboard.html'
})
export class DashboardComponent implements OnInit {

  tasks: any[] = []

  constructor(private service: TaskService) {}

  ngOnInit(): void {

    this.service.tasks.subscribe((res: any[]) => {
      this.tasks = res
    })

    this.service.getTasks()
  }

  deleteTask(id: number): void {

    this.service.deleteTask(id)
      .subscribe(() => {

        this.service.getTasks()
      })
  }

  filter(status: string): void {

    if (status === 'ALL') {

      this.service.getTasks()

      return
    }

    this.service.filterTasks(status)
  }
}