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
  private readonly cvService = inject(CvService);
  private readonly embaucheService = inject(EmbaucheService);

  readonly cvs = this.cvService.getCvs();
  readonly embauches = this.embaucheService.embauches;
  selectedCv = signal<Cv | null>(null);

  onSelectCv(cv: Cv): void {
    this.selectedCv.set(cv);
  }

  embaucher(): void {
    const cv = this.selectedCv();
    if (cv) {
      this.embaucheService.embaucher(cv);
    }
  }
}