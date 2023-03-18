import {ShelfType} from "./shelf-type.enum";

/**
 * Prefetched version of {@link Shelf}. Unlike a regular instance, a prefetched instance
 * does not contain any references to the items placed on a particular shelf.
 */
export interface PrefetchedShelf {
  /**
   * Unique identifier of the shelf.
   */
  shelfId: string;

  /**
   * Name of the shelf, chosen by the user. For example "Games" or "Sci-fi movies".
   */
  shelfName: string;

  /**
   * Type of the shelf, for example "BOOK" or "OTHER".
   */
  shelfType: ShelfType;
}
