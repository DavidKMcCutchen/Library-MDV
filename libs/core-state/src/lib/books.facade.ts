import { Injectable } from '@angular/core';
import { Book } from '@library/api-interfaces';
import { Action, ActionsSubject, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import * as BookActions from './books.actions';
import * as fromBooks from './books.reducer';
import * as BooksSelectors from './books.selectors';

@Injectable({
  providedIn: 'root',
})
export class BookFacade {
  allBooks$: Observable<Book[]> = this.store.pipe(select(BooksSelectors.getAllBooks));
  selectedBook$: Observable<Book> = this.store.pipe(select(BooksSelectors.getSelectedBook));
  loaded$ = this.store.pipe(select(BooksSelectors.getBookLoaded));

  mutations$ = this.actions$.pipe(
    filter((action: Action) =>
      action.type === BookActions.createBook({} as any).type ||
      action.type === BookActions.deleteBook({} as any).type ||
      action.type === BookActions.updateBook({} as any).type
    )
  );

  selectBook(bookId: string) {
    this.dispatch(BookActions.selectBook({ bookId }));
  }

  loadBooks() {
    this.dispatch(BookActions.loadBooks());
  }

  loadBook(bookId: string) {
    this.dispatch(BookActions.loadBook({ bookId }));
  }

  saveBook(book: Book) {
    book.id ? this.updateBook(book) : this.createBook(book);
  }

  createBook(book: Book) {
    this.dispatch(BookActions.createBook({ book }));
  }

  updateBook(book: Book) {
    this.dispatch(BookActions.updateBook({ book }));
  }

  deleteBook(book: Book) {
    this.dispatch(BookActions.deleteBook({ book }));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }

  constructor(
    private store: Store<fromBooks.BookPartialState>,
    private actions$: ActionsSubject
  ) {}
}