
import {
  Directive,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: 'input[appRainbow], textarea[appRainbow]',
  standalone: true,
})
export class RainbowDirective {

  @HostBinding('style.color')
  textColor = 'black';

  @HostBinding('style.borderColor')
  borderColor = 'black';

  private generateRandomColor(): string {
    return '#' + Math.floor(Math.random() * 16777216)
      .toString(16)
      .padStart(6, '0');
  }

  @HostListener('keyup')
  onKeyUp(): void {
    const color = this.generateRandomColor();

    this.textColor = color;
    this.borderColor = color;
  }
}
