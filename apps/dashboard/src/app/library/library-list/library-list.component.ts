import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from "@library/api-interfaces";

@Component({
  selector: 'library-library-list',
  templateUrl: './library-list.component.html',
  styleUrls: ['./library-list.component.scss']
})
export class LibraryListComponent {
  @Input() books: Book[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
