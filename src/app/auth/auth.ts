
import { Component, signal } from '@angular/core';

import {
  form,
  FormField,
  FormRoot,
  required,
  email,
  minLength,
  validate
} from '@angular/forms/signals';

@Component({
  selector: 'app-auth',
  imports: [FormField, FormRoot],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth {

  // Liste des emails interdits
  private blacklistedEmails = [
    'spam@gmail.com',
    'fake@gmail.com',
    'blocked@gmail.com'
  ];

  // 1. Le signal qui contient les données du formulaire
  credentials = signal({
    email: '',
    password: ''
  });

  // 2. Création du formulaire et de ses validateurs
  authForm = form(this.credentials, path => {

    // Validations de l'email
    required(path.email, {
      message: 'L email est obligatoire.'
    });

    email(path.email, {
      message: 'Veuillez saisir un email valide.'
    });

    // Validateur personnalisé
    validate(path.email, ({ value }) => {

      const currentEmail = value()?.toLowerCase().trim();

      if (!currentEmail) {
        return null;
      }

      if (this.blacklistedEmails.includes(currentEmail)) {
        return {
          kind: 'blacklistedEmail',
          message: 'Cet email est interdit.'
        };
      }

      return null;
    });

    // Validations du password
    required(path.password, {
      message: 'Le password est obligatoire.'
    });

    minLength(path.password, 4, {
      message: 'Le password doit contenir au moins 4 caractères.'
    });

  });

  // 3. Méthode d'envoi
  envoyer(event: Event): void {

    event.preventDefault();

    if (this.authForm().valid()) {

      console.log({
        email: this.credentials().email,
        password: this.credentials().password
      });

    }
  }
}
