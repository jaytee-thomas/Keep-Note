import { Component, OnInit } from '@angular/core';
import { NOTES } from '../../models/notes';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css'],
})
export class NoteViewComponent implements OnInit {
  notes = NOTES;
  filteredNotes = NOTES;

  constructor() {}

  ngOnInit() {}
  onSearchTextChanged(searchText: string) {
      // code to filter notes array based on searchText
      (this.filteredNotes = this.notes.filter((note) =>
        note.title.includes(searchText)
      ));
  }
}
