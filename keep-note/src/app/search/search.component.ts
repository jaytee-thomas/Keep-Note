import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  @Output() searchTextChanged = new EventEmitter<string>();
  searchText?: string;

  searchNote() {
    console.log(this.searchText);
    this.searchTextChanged.emit(this.searchText);
  }
}
