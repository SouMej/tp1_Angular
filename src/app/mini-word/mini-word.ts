
import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-mini-word',
  imports: [NgStyle],
  templateUrl: './mini-word.html',
  styleUrl: './mini-word.css'
})
export class MiniWord {
  textColor = '#000000';
  fontSize = 24;
  fontFamily = 'Arial';

  fonts = ['Arial', 'Georgia', 'Verdana', 'Courier New'];
}
