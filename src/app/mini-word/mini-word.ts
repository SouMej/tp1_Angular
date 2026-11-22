import { Component, signal } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-mini-word',
  imports: [NgStyle],
  templateUrl: './mini-word.html',
  styleUrl: './mini-word.css'
})
export class MiniWord {
  textColor = signal('#000000');
  fontSize = signal(24);
  fontFamily = signal('Arial');

  fonts = signal(['Arial', 'Georgia', 'Verdana', 'Courier New']);
}
