import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {

  private readonly _fb = inject(FormBuilder);

  loginForm = this._fb.group({
    email: [''],
    password: ['']
  });

}
