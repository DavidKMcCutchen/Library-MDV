import { Book } from "@library/api-interfaces";
import { createAction, props } from "@ngrx/store";

// Select Entity

export const selectBook = createAction(
  '[BOOKS] Select Book',
  props<{ bookId: string }>()
);

// Load All Entities

export const loadBooks = createAction(
  '[BOOKS] Load Books',
);

export const loadBooksSuccess = createAction(
  '[BOOKS] Load Books Success',
  props<{ books: Book[] }>()
);

export const loadBooksFailure = createAction(
  '[BOOKS] Load Books Failure',
  props<{ error: any}>()
);

// Load Single Entity

export const loadBook = createAction(
  '[BOOKS] Load Book',
  props<{ bookId: string }>()
);

export const loadBookSuccess = createAction(
  '[BOOKS] Load Book Success',
  props<{ book: Book}>()
);

export const loadBookFailure = createAction(
  '[BOOKS] Load Book Failure',
  props<{ error: any }>()
);

// Load Update Entity

export const updateBook = createAction(
  '[BOOKS] Update Book',
  props<{ book: Book }>()
);

export const updateBookSuccess = createAction(
  '[BOOKS] Update Book Success',
  props<{ book: Book }>()
);

export const updateBookFailure = createAction(
  '[BOOKS] Update Book Failure',
  props<{ error: any }>()
);

// Load Delete Entity

export const deleteBook = createAction(
  '[BOOKS] Delete Book',
  props<{ book: Book}>()
);

export const deleteBookSuccess = createAction(
  '[BOOKS] Delete Book Success',
  props<{ book: Book }>()
);

export const deleteBookFailure = createAction(
  '[BOOKS] Delete Book Failure',
  props<{ error: any }>()
);

// Load Create Entity

export const createBook = createAction(
  '[BOOKS] Create Book]',
  props<{ book: Book }>()
);

export const createBookSuccess = createAction(
  '[BOOKS] Create Book Success',
  props<{ book: Book }>()
);

export const createBookFailure = createAction(
  '[BOOKS] Create Book Failure',
  props<{ error: any }>()
);