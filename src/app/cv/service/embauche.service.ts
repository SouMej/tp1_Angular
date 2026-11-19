import { Injectable, signal } from '@angular/core';
import { Cv } from '../model/cv';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  embauches = signal<Cv[]>([]);

  cvExiste(cv: Cv): boolean {
    return this.embauches().some((embauche) => embauche.id === cv.id);
  }

  embaucher(cv: Cv): boolean {
    if (this.cvExiste(cv)) {
      return false;
    }

    this.embauches.update((liste) => [...liste, cv]);
    return true;
  }
}