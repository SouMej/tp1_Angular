import { Injectable, inject, signal, WritableSignal } from '@angular/core';
import { Cv } from '../model/cv';
import { EmbaucheService } from './embauche.service';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  embaucheService = inject(EmbaucheService);

  private readonly storageKey = 'cv-list';

  private readonly cvInitials: Cv[] = [
    { id: 1, name: 'Mejri', firstname: 'Sonia', age: 21, cin: '09876543', job: 'Ingénieure Machine Learning ', path: 'images/sonia.jpg' },
    { id: 2, name: 'Selmi', firstname: 'Emna', age: 22, cin: '07654321', job: 'Ingénieure Cybersécurité', path: 'images/emna.jpg' },
    { id: 3, name: 'Hanafi', firstname: 'Rayen', age: 22, cin: '08123456', job: 'Ingénieur Blockchain ', path: 'images/rayen.jpg' },
    { id: 4, name: 'Daoud', firstname: 'Mariem', age: 22, cin: '11223344', job: 'Développeuse', path: 'images/mariem.jpeg' },
    { id: 5, name: 'Kchaou', firstname: 'Zaineb', age: 22, cin: '22334455', job: 'Développeuse', path: 'images/zaineb.jpeg' },
    { id: 6, name: 'Slim', firstname: 'Nour Nejia', age: 22, cin: '33445566', job: 'Développeuse', path: 'images/nour.jpeg' },
  ];

  cvs = signal<Cv[]>(this.chargerCvs());
  selectedCv = signal<Cv | null>(null);

  private chargerCvs(): Cv[] {
    try {
      const valeur = localStorage.getItem(this.storageKey);

      if (valeur !== null) {
        return JSON.parse(valeur) as Cv[];
      }
    } catch {
      // localStorage peut être indisponible ou contenir une valeur invalide.
    }

    return this.cvInitials;
  }

  private sauvegarderCvs(): void {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.cvs()));
    } catch {
      // La suppression reste effective dans la session courante.
    }
  }

  getCvs(): WritableSignal<Cv[]> {
    return this.cvs;
  }

  getCvById(id: number): Cv | undefined {
    return this.cvs().find((cv) => cv.id === id);
  }

  onSelectCv(cv: Cv): void {
    this.selectedCv.set(cv);
  }

  supprimerCv(cv: Cv): void {
    this.cvs.update((liste) => liste.filter((item) => item.id !== cv.id));
    this.sauvegarderCvs();
    this.embaucheService.supprimer(cv);

    if (this.selectedCv()?.id === cv.id) {
      this.selectedCv.set(null);
    }
  }

  embaucherSelectionne(): boolean {
    const cv = this.selectedCv();

    if (!cv) {
      return false;
    }

    return this.embaucheService.embaucher(cv);
  }
}
