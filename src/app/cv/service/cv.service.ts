import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal, WritableSignal } from '@angular/core';
import { Cv } from '../model/cv';
import { EmbaucheService } from './embauche.service';

interface ApiCv {
  id: number;
  name: string;
  firstname: string;
  age: number;
  cin: number | string;
  job: string;
  path: string;
}

@Injectable({
  providedIn: 'root',
})
export class CvService {
  http = inject(HttpClient);
  embaucheService = inject(EmbaucheService);

  apiUrl = 'https://apilb.tridevs.net/api/personnes';
  storageKey = 'cv-list';

  readonly cvInitials: Cv[] = [
    { id: 1, name: 'Mejri', firstname: 'Sonia', age: 21, cin: '09876543', job: 'Ingénieure Machine Learning ', path: 'images/sonia.jpg' },
    { id: 2, name: 'Selmi', firstname: 'Emna', age: 22, cin: '07654321', job: 'Ingénieure Cybersécurité', path: 'images/emna.jpg' },
    { id: 3, name: 'Hanafi', firstname: 'Rayen', age: 22, cin: '08123456', job: 'Ingénieur Blockchain ', path: 'images/rayen.jpg' },
    { id: 4, name: 'Daoud', firstname: 'Mariem', age: 22, cin: '11223344', job: 'Développeuse', path: 'images/mariem.jpeg' },
    { id: 5, name: 'Kchaou', firstname: 'Zaineb', age: 22, cin: '22334455', job: 'Développeuse', path: 'images/zaineb.jpeg' },
    { id: 6, name: 'Slim', firstname: 'Nour Nejia', age: 22, cin: '33445566', job: 'Développeuse', path: 'images/nour.jpeg' },
  ];

  cvs = signal<Cv[]>(this.cvInitials);
  selectedCv = signal<Cv | null>(null);
  apiError = signal(false);

  constructor() {
    this.chargerCvsDepuisApi();
  }

  chargerCvsDepuisApi(): void {
    this.http.get<ApiCv[]>(this.apiUrl).subscribe({
      next: (personnes) => {
        const cvs = personnes.map((personne) => this.convertirCv(personne));
        this.cvs.set(cvs);
        this.apiError.set(false);
        this.sauvegarderCvs();
      },
      error: () => {
        this.cvs.set(this.cvInitials);
        this.apiError.set(true);
        this.sauvegarderCvs();
      },
    });
  }

  convertirCv(personne: ApiCv): Cv {
    let path = personne.path?.trim() ?? '';

    if (path) {
      if (path === 'as.jpg') {
        path = 'images/as.jpg';
      }
    }

    return {
      id: personne.id,
      name: personne.name,
      firstname: personne.firstname,
      age: personne.age,
      cin: String(personne.cin),
      job: personne.job,
      path,
    };
  }

  sauvegarderCvs(): void {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.cvs()));
    } catch {}
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
