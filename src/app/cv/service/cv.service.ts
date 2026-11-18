import { Injectable } from '@angular/core';
import { Cv } from '../model/cv';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private readonly cvs: Cv[] = [
    { id: 1, name: 'Mejri', firstname: 'Sonia', age: 21, cin: '09876543', job: 'Ingénieure Machine Learning ', path: 'images/sonia.jpg' },
    { id: 2, name: 'Selmi', firstname: 'Emna', age: 22, cin: '07654321', job: 'Ingénieure Cybersécurité', path: 'images/emna.jpg' },
    { id: 3, name: 'Hanafi', firstname: 'Rayen', age: 22, cin: '08123456', job: 'Ingénieur Blockchain ', path: 'images/rayen.jpg' },
    { id: 4, name: 'Daoud', firstname: 'Mariem', age: 22, cin: '11223344', job: 'Développeuse', path: 'images/mariem.jpeg' },
    { id: 5, name: 'Kchaou', firstname: 'Zaineb', age: 22, cin: '22334455', job: 'Développeuse', path: 'images/zaineb.jpeg' },
    { id: 6, name: 'Slim', firstname: 'Nour Nejia', age: 22, cin: '33445566', job: 'Développeuse', path: 'images/nour.jpeg' },
  ];

  getCvs(): Cv[] {
    return this.cvs;
  }
}
