import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Cv } from '../model/cv';
import { CvService } from '../service/cv.service';

@Component({
  selector: 'app-detail-page',
  imports: [RouterLink],
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.css',
})
export class DetailPageComponent {
route = inject(ActivatedRoute);
router = inject(Router);
cvService = inject(CvService);
destroyRef = inject(DestroyRef);

  cv = signal<Cv | null>(null);

  constructor() {
    this.route.paramMap
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((params) => {
        const id = Number(params.get('id'));
        this.cv.set(this.cvService.getCvById(id) ?? null);
      });
  }

  supprimer(cv: Cv): void {
    this.cvService.supprimerCv(cv);
    this.router.navigate(['/cv']);
  }
}
