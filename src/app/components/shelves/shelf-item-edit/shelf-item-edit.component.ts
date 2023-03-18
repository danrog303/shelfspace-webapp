import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ShelfItem} from "../../../models/shelf-item.model";
import {ShelfItemStatus} from "../../../models/shelf-item-status.enum";
import {ShelfItemService} from "../../../services/shelf-item.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-shelf-item-edit',
  templateUrl: './shelf-item-edit.component.html'
})
export class ShelfItemEditComponent implements OnInit{
  /**
   * If false, then form is currently in the "create new item" mode.
   * If true, then form is in the "edit the existing item" mode.
   */
  editMode = false;

  /**
   * If true, then form is currently waiting for API response.
   */
  pending = false;

  /**
   * Two-way bound value of "item status" form field.
   */
  chosenItemStatus: ShelfItemStatus = ShelfItemStatus.Finished;

  @Input() shelfId: string = "";
  @Input() editedItem: ShelfItem | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() itemSaved = new EventEmitter<void>();

  error = false;
  quotaExceeded = false;

  constructor(private shelfItemService: ShelfItemService) {}

  ngOnInit() {
    this.editMode = !!this.editedItem;
    if (this.editedItem) {
      this.chosenItemStatus = this.editedItem.status;
    }
  }

  onSaveItem(shelfItemEditForm: NgForm) {
    const shelfItem: ShelfItem = {
      itemId: this.editedItem?.itemId ?? "",
      title: shelfItemEditForm.value.title,
      status: shelfItemEditForm.value.status,
      rating: shelfItemEditForm.value.rating,
      finishedCount: shelfItemEditForm.value.finishedCount,
      creationDate: new Date(),
    };

    this.pending = true;
    this.error = false;
    this.quotaExceeded = false;

    const apiCallHandle = {
      next: this.handleItemSaved.bind(this),
      error: this.handleError.bind(this)
    };

    if (this.editMode) {
      this.shelfItemService.updateShelfItem(this.shelfId, shelfItem).subscribe(apiCallHandle);
    } else {
      this.shelfItemService.createShelfItem(this.shelfId, shelfItem).subscribe(apiCallHandle);
    }
  }

  private handleItemSaved() {
    this.pending = false;
    this.itemSaved.emit();
    this.close.emit();
  }

  private handleError(errorData: any) {
    this.pending = false;
    if (errorData?.status === 409) {
      this.quotaExceeded = true;
    } else {
      this.error = true;
    }
  }
}
