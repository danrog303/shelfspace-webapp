import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-error-alert',
  templateUrl: './error-alert.component.html',
  styles: [
  ]
})
export class ErrorAlertComponent {
  @Output() tryAgain = new EventEmitter<void>();

  onTryAgain() {
    this.tryAgain.emit();
  }
}
