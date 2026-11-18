import { Injectable, signal } from '@angular/core';
import { Cv } from '../model/cv';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  embauches = signal<Cv[]>([]);

  embaucher(cv: Cv): void {
    this.embauches.update((liste) => [...liste, cv]);
  }
}