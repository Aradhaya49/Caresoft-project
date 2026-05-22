import { Component } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { FormGroup, FormControl } from '@angular/forms'

import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.html'
})
export class Login {

  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  submit(): void {

    this.http.post<any>(
      'http://127.0.0.1:8000/auth/login/',
      this.form.value
    )
    .subscribe({

      next: (res) => {

        console.log(res)

        localStorage.setItem(
          'token',
          res.token
        )

        this.router.navigate(['/dashboard'])
      },

      error: (err) => {

        console.log(err)

        alert('Login Failed')
      }
    })
  }
}