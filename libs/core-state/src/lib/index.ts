import { ActionReducerMap } from '@ngrx/store';
import * as fromBooks from './books.reducer';

export interface AppState {
  [fromBooks.BOOK_FEATURE_KEY]: fromBooks.BookState
} 

export const reducers: ActionReducerMap<AppState> = {
  [fromBooks.BOOK_FEATURE_KEY]: fromBooks.bookReducer
};

//---------------------------------------
// Common Selectors
//---------------------------------------
