import { Component } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { FormGroup, FormControl } from '@angular/forms'

import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.html'
})
export class Signup {

  form = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  submit(): void {

    this.http.post(
      'http://127.0.0.1:8000/auth/signup/',
      this.form.value
    )
    .subscribe({

      next: (res) => {

        console.log(res)

        alert('Signup Successful')

        this.router.navigate(['/login'])
      },

      error: (err) => {

        console.log(err)

        alert('Signup Failed')
      }
    })
  }
}