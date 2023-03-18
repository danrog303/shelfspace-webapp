import {ShelfItemStatus} from "./shelf-item-status.enum";

/**
 * A single item that was created on one of the user's shelves.
 */
export interface ShelfItem {
  /**
   * Unique identifier of the item.
   */
  itemId: string;

  /**
   * Title of the item - for example name of the book or the movie.
   */
  title: string;

  /**
   * Date of item creation. This field is generated automatically on item's creation and user
   * should not be able to overwrite it.
   */
  creationDate: Date;

  /**
   * Status of the item (i.e. whether it was Finished or is it Planned).
   */
  status: ShelfItemStatus;

  /**
   * User's rate of this item - from 1 to 10 (can also be null, if user did not specify his rating).
   * If {@link ShelfItem#status} is equal to {@link ShelfItemStatus#Planned}}, this
   * field should be equal to null and ignored.
   */
  rating: number | null;

  /**
   * How many times user did finish this item?
   * If {@link ShelfItem#status} is not equal to {@link ShelfItemStatus#Finished}, this
   * field should be equal to null and ignored.
   * If {@link ShelfItem#status} is equal to {@link ShelfItemStatus#Finished}, this field cannot be null.
   */
  finishedCount: number | null;
}
