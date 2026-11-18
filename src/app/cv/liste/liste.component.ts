import { Component, input, output } from '@angular/core';
import { Cv } from '../model/cv';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-liste',
  imports: [ItemComponent],
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css',
})
export class ListeComponent {
  cvs = input.required<Cv[]>();
  selectCv = output<Cv>();

  onSelectCv(cv: Cv) {
    this.selectCv.emit(cv);
  }
}