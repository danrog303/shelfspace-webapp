import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {PrefetchedShelf} from "../../../models/prefetched-shelf.model";
import {ShelfService} from "../../../services/shelf.service";
import {NgForm} from "@angular/forms";

@Component({selector: 'app-shelf-edit', templateUrl: 'shelf-edit.component.html'})
export class ShelfEditComponent implements OnInit {
  saving = false;
  error = false;
  quotaExceeded = false;
  editMode = false;
  @Input() editedShelf: PrefetchedShelf | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() shelfCreated = new EventEmitter<void>();

  constructor(private shelfService: ShelfService) {}

  ngOnInit(): void {
    this.editMode = !!this.editedShelf;
  }

  onShelfSave(shelfForm: NgForm) {
    const shelf: PrefetchedShelf = {
      shelfId: this.editedShelf?.shelfId ?? "",
      shelfName: shelfForm.value.shelfName,
      shelfType: shelfForm.value.shelfType
    };

    this.saving = true;
    this.error = false;
    this.quotaExceeded = false;

    this.shelfService.saveShelf(shelf, !this.editMode).subscribe({
      next: () => {
        this.close.emit();
        this.shelfCreated.emit();
      },
      error: errorData => {
        this.saving = false;
        if (errorData.status === 409) {
          this.quotaExceeded = true;
        } else {
          this.error = true;
        }
      }
    });
  }
}
