import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { ShelfItem } from "../models/shelf-item.model";
import { environment } from "../../environments/environment";
import { PrefetchedShelf } from "../models/prefetched-shelf.model";

/**
 * Allows to create, update and delete shelf items using the ShelfSpace REST API.
 */
@Injectable({providedIn: 'root'})
export class ShelfItemService {
  constructor(private http: HttpClient) {}

  /**
   * Sends request to the ShelfSpace API to create a new item on the specified shelf.
   */
  createShelfItem(shelfId: string, shelfItem: ShelfItem): Observable<PrefetchedShelf> {
    const endpoint = `${environment.shelfSpace.apiEndpoint}/shelves/${shelfId}/items`;
    return this.http.post<PrefetchedShelf>(endpoint, shelfItem);
  }

  /**
   * Sends request to the ShelfSpace API to update the item from the specified shelf.
   */
  updateShelfItem(shelfId: string, shelfItem: ShelfItem): Observable<PrefetchedShelf> {
    const endpoint = `${environment.shelfSpace.apiEndpoint}/shelves/${shelfId}/items/${shelfItem.itemId}`
    return this.http.put<PrefetchedShelf>(endpoint, shelfItem);
  }

  /**
   * Sends request to the ShelfSpace API to delete the item from the specified shelf.
   */
  deleteShelfItem(shelfId: string, shelfItem: ShelfItem): Observable<PrefetchedShelf> {
    const endpoint = `${environment.shelfSpace.apiEndpoint}/shelves/${shelfId}/items/${shelfItem.itemId}`
    return this.http.delete<PrefetchedShelf>(endpoint);
  }
}
