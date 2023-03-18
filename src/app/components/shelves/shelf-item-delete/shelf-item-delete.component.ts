import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ShelfItemService} from "../../../services/shelf-item.service";
import {ShelfItem} from "../../../models/shelf-item.model";

@Component({
  selector: 'app-shelf-item-delete',
  templateUrl: './shelf-item-delete.component.html'
})
export class ShelfItemDeleteComponent {
  deleting = false;
  @Input() shelfId: string = "";
  @Input() itemToDelete: ShelfItem | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() itemDeleted = new EventEmitter<void>();

  constructor(private shelfItemService: ShelfItemService) {}

  onDeleteItem() {
    if (this.itemToDelete === null) {
      return;
    }

    this.deleting = true;

    this.shelfItemService.deleteShelfItem(this.shelfId, this.itemToDelete).subscribe(() => {
      this.deleting = false;
      this.itemDeleted.emit();
      this.close.emit();
    });
  }

  onCancel() {
    this.close.emit();
  }
}
