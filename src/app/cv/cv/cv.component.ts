import { Component, inject, signal } from '@angular/core';
import { Cv } from '../model/cv';
import { CvService } from '../service/cv.service';
import { EmbaucheService } from '../service/embauche.service';
import { ListeComponent } from '../liste/liste.component';
import { DetailComponent } from '../detail/detail.component';
import { EmbauchesComponent } from '../embauches/embauches.component';

@Component({
  selector: 'app-cv',
  imports: [ListeComponent, DetailComponent, EmbauchesComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
})
export class CvComponent {
  cvService = inject(CvService);
  embaucheService = inject(EmbaucheService);

  cvs = this.cvService.getCvs();
  embauches = this.embaucheService.embauches;
  selectedCv = signal<Cv | null>(null);

  onSelectCv(cv: Cv): void {
    this.selectedCv.set(cv);
  }

  cvExiste(cv: Cv): boolean {
    return this.embaucheService.cvExiste(cv);
  }

  embaucher(): void {
    const cv = this.selectedCv();
    if (cv) {
      this.embaucheService.embaucher(cv);
    }
  }
}