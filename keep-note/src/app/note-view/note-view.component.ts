import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NoteService } from '../services/note.service';
import { Note } from '../../models/note';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit {
  notes: Note[] = [];
  
  @Output() noteAdded = new EventEmitter<Note>();

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.noteService.getNotes().subscribe(
      (notes: Note[]) => {
        this.notes = notes;
      },
      (error) => {
        console.error(error);
        alert('Failed to fetch notes.');
      }
    );
  }

  onSearchTextChanged(searchText: string) {
    if (searchText) {
      this.noteService.getNotes().subscribe(notes => {
        this.notes = notes.filter(note => note.title.includes(searchText));
      }, error => {
        // handle error here
      });
    } else {
      this.noteService.getNotes().subscribe(notes => {
        this.notes = notes;
      }, error => {
        // handle error here
      });
    }
  }
  
  
  onNoteAdded(note: Note) {
    this.notes.push(note);
  }
}