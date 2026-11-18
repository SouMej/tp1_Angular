
import { Component } from '@angular/core';
import { RainbowDirective } from '../directives/rainbow';

@Component({
  selector: 'app-rainbow',
  imports: [RainbowDirective],
  templateUrl: './rainbow.html',
  styleUrl: './rainbow.css',
})
export class Rainbow {}
