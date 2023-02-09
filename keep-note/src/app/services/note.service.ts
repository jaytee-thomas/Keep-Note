import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from '../../models/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  URL = 'http://localhost:3000/notes';

  constructor(private http: HttpClient) { }

  getNotes() {
    return this.http.get<Note[]>(this.URL);
  }

  addNote(note: Note) {
    return this.http.post<Note>(this.URL, note);
  }
}
