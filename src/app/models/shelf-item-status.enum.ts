/**
 * Represents the status of a single shelf item - for example it can be "finished" or "planned".
 */
export enum ShelfItemStatus {
  /**
   * This shelf item has been finished at least one time.
   */
  Finished="FINISHED",

  /**
   * This shelf item is planned to be finished in the future.
   */
  Planned="PLANNED",

  /**
   * The completion of this item is temporarily on hold.
   */
  Stalled="STALLED",

  /**
   *  This item was started, but there is no intention to complete it.
   */
  Dropped="DROPPED",

  /**
   * This item is currently in progress and will be completed in the future.
   */
  InProgress="IN_PROGRESS"
}
