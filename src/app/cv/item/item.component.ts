import { Component, input, output } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent {
  cv = input.required<Cv>();
  selectable = input(true);
  selectCv = output<Cv>();

  onSelect(): void {
    if (this.selectable()) {
      this.selectCv.emit(this.cv());
    }
  }
}