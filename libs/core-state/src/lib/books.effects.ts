import { Injectable } from "@angular/core";
import { LibraryService } from "@library/core-data";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as BookActions from './books.actions';
import { map } from "rxjs/operators";
import { fetch, pessimisticUpdate } from "@nrwl/angular";
import { Book } from "@library/api-interfaces";

@Injectable()
export class BookEffects {
  loadBook$ = createEffect(() => 
  this.actions$.pipe(
    ofType(BookActions.loadBook),
    fetch({
      run: (action) => 
       this.libraryService
        .find(action.bookId)
        .pipe(
          map((book: Book) =>
           BookActions.loadBookSuccess({ book })
          )
        ),
      onError: (action, error) => BookActions.loadBookFailure({ error }), 
     })
   ) 
);

loadBooks$ = createEffect(() =>
  this.actions$.pipe(
    ofType(BookActions.loadBooks),
    fetch({
      run: () =>
        this.libraryService
          .all()
          .pipe(
            map((books: Book[]) => 
            BookActions.loadBooksSuccess({ books })
            )
          ),
        onError: (action, error) => BookActions.loadBooksFailure({ error })  
    })
  )
  );

  updateBook$ = createEffect(() => 
  this.actions$.pipe(
    ofType(BookActions.updateBook),
    pessimisticUpdate({
      run: (action) =>
        this.libraryService
          .update(action.book)
          .pipe(
            map((book: Book) => 
            BookActions.updateBookSuccess({ book })
            )
          ),
        onError: (action, error) =>
            BookActions.updateBookFailure({ error }),
    })
  ));

  deleteBook$ = createEffect(() => 
  this.actions$.pipe(
    ofType(BookActions.deleteBook),
    pessimisticUpdate({
      run: (action) => 
       this.libraryService
        .delete(action.book)
        .pipe(
          map(() => 
          BookActions.deleteBookSuccess({ book: action.book })
          )
        ),
       onError: (action, error) => 
       BookActions.deleteBookFailure({ error }) 
    })
  ));

  createBook$ = createEffect(() => 
  this.actions$.pipe(
    ofType(BookActions.createBook),
    pessimisticUpdate({
      run: (action) =>
       this.libraryService
        .create(action.book)
        .pipe(
          map((book: Book) => 
           BookActions.createBookSuccess({ book })
          )
        ),
      onError: (action, error) =>
      BookActions.createBookFailure({ error }) 
    })
  ));

  constructor(
    private actions$: Actions,
    private libraryService: LibraryService
  ) {}

}