import {ShelfItem} from "./shelf-item.model";
import {ShelfType} from "./shelf-type.enum";

/**
 * Shelf created by the particular user. Shelf can be used to store {@link ShelfItem}.
 */
export interface Shelf {
  /**
   * Unique identifier of the shelf.
   */
  shelfId: string;

  /**
   * Name of the shelf. For example "Games" or "Sci-fi movies".
   */
  shelfName: string;

  /**
   * Unique identifier of the user who owns this shelf.
   */
  ownerId: String;

  /**
   * Type of the shelf, for example "BOOK" or "OTHER".
   */
  shelfType: ShelfType;

  /**
   * List of items that are placed on this shelf
   */
  items: ShelfItem[];
}
