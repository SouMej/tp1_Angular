import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-color',
  imports: [],
  templateUrl: './color.html',
  styleUrl: './color.css'
})
export class Color {
  // La couleur de départ (et celle du reset)
  couleurParDefaut = signal('lightblue');

  // La couleur actuelle du div : au début, c'est celle par défaut
  couleur = signal(this.couleurParDefaut());

  // Appelée à chaque fois qu'on tape dans l'input
  changerCouleur(nouvelleCouleur: string) {
    this.couleur.set(nouvelleCouleur);
  }

  // Appelée au clic sur le bouton : remet la couleur par défaut et vide l'input
  reinitialiser(input: HTMLInputElement) {
    this.couleur.set(this.couleurParDefaut());
    input.value = '';
  }
}