import { Component, signal } from '@angular/core';
import { Cv } from '../model/cv';
import { ListeComponent } from '../liste/liste.component';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-cv',
  imports: [ListeComponent, DetailComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
})
export class CvComponent {
  cvs: Cv[] = [
    { id: 1, name: 'Mejri', firstname: 'Sonia', age: 21, cin: '09876543', job: 'Ingénieure Machine Learning ', path: 'images/sonia.jpg' },
    { id: 2, name: 'Selmi', firstname: 'Emna', age: 22, cin: '07654321', job: 'Ingénieure Cybersécurité', path: 'images/emna.jpg' },
    { id: 3, name: 'Hanafi', firstname: 'Rayen', age: 22, cin: '08123456', job: 'Ingénieur Blockchain ', path: 'images/rayen.jpg' },
  ];

  selectedCv = signal<Cv | null>(null);

  onSelectCv(cv: Cv) {
    this.selectedCv.set(cv);
  }
}