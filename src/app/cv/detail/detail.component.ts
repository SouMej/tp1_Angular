import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-detail',
  imports: [RouterLink],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
})
export class DetailComponent {
  cv = input.required<Cv>();
  dejaEmbauche = input(false);
  embaucher = output<void>();
}