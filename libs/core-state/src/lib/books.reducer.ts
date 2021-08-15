import { Book } from "@library/api-interfaces";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import * as BookActions from './books.actions'

export const BOOK_FEATURE_KEY = 'books';

export interface BookState extends EntityState<Book> {
  selectedId?: string; // which Cidade record has been selected
  loaded: boolean; // has the Cidades list been loaded
  error?: string | null; // last known error (if any)
}

export interface BookPartialState {
  readonly [BOOK_FEATURE_KEY]: BookState;
}

export const bookAdapter: EntityAdapter<Book> = createEntityAdapter<Book>();

export const initialBookState: BookState = bookAdapter.getInitialState({
  loaded: false
});

const onFailure = (state, { error }): BookState => ({ ...state, error })

const onDispatch = (state, action): BookState => ({
  ...state,
  loaded: false,
  error: null
});

const _bookReducer = createReducer(
  initialBookState,
  on(
    BookActions.loadBookFailure,
    BookActions.loadBooksFailure,
    BookActions.deleteBookFailure,
    BookActions.updateBookFailure,
    BookActions.createBookFailure,
    onFailure
  ),
  on(
    BookActions.loadBook,
    BookActions.loadBooks,
    BookActions.deleteBook,
    BookActions.updateBook,
    BookActions.createBook,
    onDispatch
  ),
  on(
    BookActions.loadBookSuccess, (state, { book }) =>
    bookAdapter.upsertOne(book, {...state, loaded: true })
  ),
  on(BookActions.selectBook, (state, { bookId }) => ({
    ...state,
    selectedId: bookId,
  })
  ),
  on(BookActions.loadBooksSuccess, (state, {books}) => 
  bookAdapter.setAll(books, {...state, loaded: true })
  ),
  on(BookActions.deleteBookSuccess, (state, { book }) =>
  bookAdapter.removeOne(book.id, {...state, loaded: true })
  ),
  on(BookActions.updateBookSuccess, (state, { book }) => 
  bookAdapter.updateOne(
    { id: book.id, changes: book },
    { ...state, loaded: true }
  )
),

on(BookActions.createBookSuccess, (state, { book }) => 
bookAdapter.addOne(book, { ...state, loaded: true }))

);

export function bookReducer(
  state: BookState | undefined,
  action: Action
) {
  return _bookReducer(state, action);
}