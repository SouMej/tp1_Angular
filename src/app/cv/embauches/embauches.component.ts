import { Component, inject } from '@angular/core';
import { EmbaucheService } from '../service/embauche.service';
import { ListeComponent } from '../liste/liste.component';

@Component({
  selector: 'app-embauches',
  imports: [ListeComponent],
  templateUrl: './embauches.component.html',
  styleUrl: './embauches.component.css',
})
export class EmbauchesComponent {
  embaucheService = inject(EmbaucheService);

  embauches = this.embaucheService.embauches;
}
