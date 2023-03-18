import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ShelfService} from "../../../services/shelf.service";
import {PrefetchedShelf} from "../../../models/prefetched-shelf.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-shelf-delete',
  templateUrl: './shelf-delete.component.html'
})
export class ShelfDeleteComponent {
  deleting = false;
  @Input() shelfToDelete: PrefetchedShelf | null = null;
  @Output() close = new EventEmitter<void>();

  constructor(private shelfService: ShelfService, private router: Router) {}

  onDeleteShelf() {
    if (this.shelfToDelete === null) {
      return;
    }

    this.deleting = true;
    this.shelfService.deleteShelf(this.shelfToDelete).subscribe(() => {
      this.close.emit();
      this.router.navigate(['/shelves']).then();
    });
  }

  onCancel() {
    this.close.emit();
  }
}
