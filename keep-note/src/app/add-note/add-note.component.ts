import { Component, EventEmitter, Output } from '@angular/core';
import { NoteService } from '../services/note.service';
//import { NOTES } from '../../models/notes';
import { Note } from '../../models/note';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css'],
})
export class AddNoteComponent {
  note: Note = {
    id: 0,
    title: '',
    content: '',
  };

  @Output() noteAdded = new EventEmitter<Note>();

  constructor(private noteService: NoteService) {}

  addNote() {
    this.noteService.addNote(this.note).subscribe(
      (data) => {
        alert('Note Added');
        this.noteAdded.emit(this.note);
        this.note = {
          id: 0,
          title: '',
          content: '',
        };
      },
      (error) => {
        console.error('Error while adding note', error);
        alert('Error while adding note');
      }
    );
  }
}
