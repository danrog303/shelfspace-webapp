import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { PrefetchedShelf } from "../models/prefetched-shelf.model";
import { environment } from "../../environments/environment";
import { Shelf } from "../models/shelf.model";

/**
 * Provides basic CRUD operations on user's shelves using the ShelfSpace REST API.
 */
@Injectable({providedIn: 'root'})
export class ShelfService {
  constructor(private http: HttpClient) {}

  /**
   * Sends request to the ShelfSpace API to create or update the given shelf.
   */
  saveShelf(shelf: PrefetchedShelf, create=false): Observable<PrefetchedShelf> {
    if (create) {
      const endpoint = `${environment.shelfSpace.apiEndpoint}/shelves`;
      return this.http.post<PrefetchedShelf>(endpoint, shelf);
    } else {
      const endpoint = `${environment.shelfSpace.apiEndpoint}/shelves/${shelf.shelfId}`;
      return this.http.put<PrefetchedShelf>(endpoint, shelf);
    }
  }

  /**
   * Sends request to the ShelfSpace API to delete the given shelf.
   */
  deleteShelf(shelf: PrefetchedShelf): Observable<PrefetchedShelf> {
    const endpoint = `${environment.shelfSpace.apiEndpoint}/shelves/${shelf.shelfId}`;
    return this.http.delete<PrefetchedShelf>(endpoint);
  }

  /**
   * Sends request to the ShelfSpace API to prefetch user's shelves.
   */
  getUserShelves(): Observable<PrefetchedShelf[]> {
    return this.http.get<PrefetchedShelf[]>(`${environment.shelfSpace.apiEndpoint}/shelves`);
  }

  /**
   * Sends request to the ShelfSpace API to fetch a specific shelf.
   */
  getShelf(shelfId: string): Observable<Shelf> {
    return this.http.get<Shelf>(`${environment.shelfSpace.apiEndpoint}/shelves/${shelfId}`);
  }
}
