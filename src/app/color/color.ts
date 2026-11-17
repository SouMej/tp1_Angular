import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  imports: [],
  templateUrl: './color.html',
  styleUrl: './color.css'
})
export class Color {
  // La couleur de départ (et celle du reset)
  couleurParDefaut = 'lightblue';

  // La couleur actuelle du div : au début, c'est celle par défaut
  couleur = this.couleurParDefaut;

  // Appelée à chaque fois qu'on tape dans l'input
  changerCouleur(nouvelleCouleur: string) {
    this.couleur = nouvelleCouleur;
  }

  // Appelée au clic sur le bouton : remet la couleur par défaut et vide l'input
  reinitialiser(input: HTMLInputElement) {
    this.couleur = this.couleurParDefaut;
    input.value = '';
  }
}