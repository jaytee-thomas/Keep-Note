import { Component, EventEmitter, Output } from '@angular/core';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  @Output() searchTextChanged = new EventEmitter<string>();
  searchText: string = '';
  notes: any[] = [];

  constructor(private noteService: NoteService) {}

  searchNote() {
    console.log(this.searchText);
    this.searchTextChanged.emit(this.searchText);
  }

  onSearchTextChanged() {
    this.searchTextChanged.emit(this.searchText);
    if (this.searchText) {
      this.noteService.getNotes().subscribe((notes) => {
        this.notes = notes.filter((note) => {
          return note.title
            .toLowerCase()
            .includes(this.searchText.toLowerCase());
        });
      });
    } else {
      this.noteService.getNotes().subscribe((notes) => {
        this.notes = notes;
      });
    }
  }
}
