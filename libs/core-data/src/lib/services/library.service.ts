import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Book } from "@library/api-interfaces";

export const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  model = 'books'

  constructor(private httpClient: HttpClient) {}

  all() {
    return this.httpClient.get<Book[]>(this.getUrl());
  }

  find(bookId: string) {
    return this.httpClient.get<Book>(this.getUrlById( bookId ));
  }

  create(books: Book) {
    return this.httpClient.post<Book>(this.getUrl(), books );
  }

  update(books: Book) {
    return this.httpClient.patch<Book>(this.getUrlById(books.id), books );
  }

  delete({ id }: Book) {
    return this.httpClient.delete<Book>(this.getUrlById(id));
  }

  private getUrl() {
    return `${BASE_URL}${this.model}`
  };

  private getUrlById(id: string) {
    return `${this.getUrl()}/${id}`
  }
}
