import {Component, OnInit} from '@angular/core';
import {ShelfService} from "../../../services/shelf.service";
import {Shelf} from "../../../models/shelf.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ShelfItem} from "../../../models/shelf-item.model";

@Component({
  selector: 'app-shelf-details',
  templateUrl: './shelf-details.component.html',
  styles: [
  ]
})
export class ShelfDetailsComponent implements OnInit {
  loading = true;
  error = false;
  deletingShelf = false;
  deletingShelfItem = false;
  editingShelf = false;
  editingShelfItem = false;

  editedShelfItem: ShelfItem | null = null;
  deletedShelfItem: ShelfItem | null = null;

  shelf: Shelf | null = null;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private shelfService: ShelfService) {}

  ngOnInit() {
    this.refreshShelfDetails();
  }

  refreshShelfDetails() {
    this.error = false;
    this.route.params.subscribe(routeParams => {
      const shelfId = routeParams['shelfId'];
      this.shelfService.getShelf(shelfId).subscribe({
        next: shelfData => {
          this.loading = false;
          this.shelf = shelfData;
        },
        error: errorData => {
          this.loading = false;
          if (errorData.status == 404 || errorData.status == 403) {
            this.router.navigate(['/shelves']).then();
          } else {
            this.error = true;
          }
        }
      });
    });
  }

  onShelfEdit() {
    this.editingShelf = true;
  }

  onShelfDelete() {
    this.deletingShelf = true;
  }

  onShelfItemCreate() {
    this.editedShelfItem = null;
    this.editingShelfItem = true;
  }

  onShelfItemEdit(shelfItem: ShelfItem) {
    this.editedShelfItem = shelfItem;
    this.editingShelfItem = true;
  }

  onShelfItemDelete(shelfItem: ShelfItem) {
    this.deletedShelfItem = shelfItem;
    this.deletingShelfItem = true;
  }
}
