import { emptyBook } from "@library/api-interfaces";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { bookAdapter, BookState, BOOK_FEATURE_KEY } from "./books.reducer";

// Lookup the 'Book' feature state managed by NgRx
export const getBookState = createFeatureSelector<BookState>(BOOK_FEATURE_KEY);

const { selectAll, selectEntities } = bookAdapter.getSelectors();


export const getBookLoaded = createSelector(
  getBookState,
  (state: BookState) => state.loaded
)

export const getBookError = createSelector(
  getBookState,
  (state: BookState) => state.error
)

export const getAllBooks = createSelector(
  getBookState,
  (state: BookState) => selectAll(state)
)

export const getBookEntities = createSelector(
  getBookState,
  (state: BookState) => selectEntities(state)
)

export const getSelectedBookId = createSelector(
  getBookState,
  (state: BookState) => state.selectedId
)

export const getSelectedBook = createSelector(
  getBookEntities,
  getSelectedBookId,
  (entities, selectedId) => (selectedId && entities[selectedId]) || emptyBook
)