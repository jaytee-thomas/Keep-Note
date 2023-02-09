import { Component } from '@angular/core';
import { NOTES } from '../../models/notes';
import { Note } from '../../models/note';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent {
  note: Note = {
    id: 0,
    title: '',
    content: ''
  };
  addNote() {
    NOTES.push(this.note);
    this.note = { id: 0, title: '', content: '' };
  }
  
}
