import { Injectable, signal } from '@angular/core';
import { Cv } from '../model/cv';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  private readonly storageKey = 'cv-embauches';

  embauches = signal<Cv[]>(this.chargerEmbauches());

  private chargerEmbauches(): Cv[] {
    try {
      const valeur = localStorage.getItem(this.storageKey);

      if (valeur !== null) {
        return JSON.parse(valeur) as Cv[];
      }
    } catch {
      // localStorage peut être indisponible ou contenir une valeur invalide.
    }

    return [];
  }

  private sauvegarderEmbauches(): void {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.embauches()));
    } catch {
      // Les embauches restent effective dans la session courante.
    }
  }

  cvExiste(cv: Cv): boolean {
    return this.embauches().some((embauche) => embauche.id === cv.id);
  }

  embaucher(cv: Cv): boolean {
    if (this.cvExiste(cv)) {
      return false;
    }

    this.embauches.update((liste) => [...liste, cv]);
    this.sauvegarderEmbauches();
    return true;
  }

  supprimer(cv: Cv): void {
    this.embauches.update((liste) =>
      liste.filter((embauche) => embauche.id !== cv.id)
    );
    this.sauvegarderEmbauches();
  }
}