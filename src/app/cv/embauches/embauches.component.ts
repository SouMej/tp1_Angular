import { Component, inject } from '@angular/core';
import { EmbaucheService } from '../service/embauche.service';

@Component({
  selector: 'app-embauches',
  imports: [],
  templateUrl: './embauches.component.html',
  styleUrl: './embauches.component.css',
})
export class EmbauchesComponent {
  embaucheService = inject(EmbaucheService);

  embauches = this.embaucheService.embauches;
}
