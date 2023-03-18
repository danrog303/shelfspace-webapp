import {Component, OnInit} from '@angular/core';
import {PrefetchedShelf} from "../../../models/prefetched-shelf.model";
import {ShelfService} from "../../../services/shelf.service";

@Component({
  selector: 'app-shelf-display',
  templateUrl: './shelf-display.component.html'
})
export class ShelfDisplayComponent implements OnInit {
  loading = true;
  error = false;
  shelfCreating = false;
  shelves: PrefetchedShelf[] = [];

  constructor(private shelfService: ShelfService) {}

  ngOnInit(): void {
    this.fetchShelves();
  }


  onShelfCreate() {
    this.shelfCreating = true;
  }

  fetchShelves() {
    this.error = false;
    this.shelfService.getUserShelves().subscribe({
      next: shelfData => {
        this.shelves = shelfData;
        this.loading = false;
      }, error: errorData => {
        console.log(errorData);
        this.loading = false;
        this.error = true;
      }
    });
  }
}
