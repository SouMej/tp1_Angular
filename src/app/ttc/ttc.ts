import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ttc',
  imports: [FormsModule], // obligatoire pour utiliser [(ngModel)]
  templateUrl: './ttc.html',
  styleUrl: './ttc.css'
})
export class Ttc {
  // Valeurs par défaut demandées par l'énoncé
  quantite = 1;
  prixUnitaire = 0;
  tva = 18;

  // Pourcentage de remise selon la quantité
  get remise(): number {
    if (this.quantite > 15) {
      return 30;
    }
    if (this.quantite >= 10) {
      return 20;
    }
    return 0;
  }

  // Prix HT total (sans TVA, sans remise)
  get prixHT(): number {
    return this.prixUnitaire * this.quantite;
  }

  // Prix TTC final, avec la TVA puis la remise
  get prixTTC(): number {
    const avecTva = this.prixHT * (1 + this.tva / 100);
    return avecTva * (1 - this.remise / 100);
  }
}