import { Directive, HostListener, signal } from '@angular/core';

@Directive({
  selector: 'input[appRainbow], textarea[appRainbow]',
  standalone: true,
  host: {
    '[style.color]': 'textColor()',
    '[style.borderColor]': 'borderColor()',
  },
})
export class RainbowDirective {
  textColor = signal('black');
  borderColor = signal('black');

  private generateRandomColor(): string {
    return '#' + Math.floor(Math.random() * 16777216)
      .toString(16)
      .padStart(6, '0');
  }

  @HostListener('keyup')
  onKeyUp(): void {
    const color = this.generateRandomColor();

    this.textColor.set(color);
    this.borderColor.set(color);
  }
}
