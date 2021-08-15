import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { emptyBook, Book } from '@library/api-interfaces';
import { BookFacade } from '@library/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'library-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  allBooks$: Observable<Book[]> = this.bookFacade.allBooks$;
  selectedBook$: Observable<Book> = this.bookFacade.selectedBook$;

  form: FormGroup;

  constructor(
    private bookFacade: BookFacade,
    private formBuilder: FormBuilder
  ) {
    this.bookFacade.mutations$.subscribe((_) => this.resetBook());
  }

  ngOnInit() {
    this.initForm();
    this.bookFacade.loadBooks();
    this.resetBook()
  }

  selectBook(book: Book) {
    this.form.patchValue(book);
    this.bookFacade.selectBook(book.id);
  }

  saveBook(book: Book) {
    this.bookFacade.saveBook(book);
  }

  deleteBook(book: Book) {
    this.bookFacade.deleteBook(book);
  }

  resetBook() {
    this.form.reset();
    this.selectBook(emptyBook)
  }

  cancel() {
    this.resetBook();
  }

  initForm() {
    this.form = this.formBuilder.group({
      id: [null],
      title: [''],
      author: [''],
    })
  }
}
