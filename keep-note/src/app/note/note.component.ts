import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../../models/note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
})
export class NoteComponent implements OnInit {
  @Input()
  note?: Note;
  isButtonsVisible = false;

  constructor() {}

  ngOnInit() {}

  showButtons() {
    this.isButtonsVisible = true;
  }

  hideButtons() {
    this.isButtonsVisible = false;
  }
}
