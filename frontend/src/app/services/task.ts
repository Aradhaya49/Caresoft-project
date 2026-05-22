import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  api = 'http://127.0.0.1:8000/tasks/'

  tasks = new BehaviorSubject<any[]>([])

  constructor(private http: HttpClient) {}

  getTasks(): void {

    this.http.get<any[]>(this.api)
      .subscribe((res: any[]) => {
        this.tasks.next(res)
      })
  }

  addTask(data: any) {

    return this.http.post(
      this.api,
      data
    )
  }

  deleteTask(id: number) {

    return this.http.delete(
      `${this.api}${id}/`
    )
  }

  filterTasks(status: string): void {

    this.http.get<any[]>(
      `${this.api}?status=${status}`
    )
    .subscribe((res: any[]) => {
      this.tasks.next(res)
    })
  }
}