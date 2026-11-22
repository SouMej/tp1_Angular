import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  imports: [FormsModule],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth {
  email = '';
  password = '';

  envoyer(form: NgForm): void {
    if (form.valid) {
      console.log({
        email: this.email,
        password: this.password,
      });
    }
  }
}
