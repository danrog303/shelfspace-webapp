import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {ShelfType} from "../../../models/shelf-type.enum";

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html'
})
export class ShelfComponent {
  @Input() shelfName: string = "";
  @Input() shelfId: string = "";
  @Input() shelfType: ShelfType = ShelfType.Book;

  constructor(private router: Router) {}
}
