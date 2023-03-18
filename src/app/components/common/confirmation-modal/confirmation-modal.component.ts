import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
})
export class ConfirmationModalComponent {
  @Output() closeModal = new EventEmitter<void>();
  @Output() actionConfirmed = new EventEmitter<void>();

  @Input() heading = "Are you sure?";
  @Input() description = "Are you sure you want to save?";
  @Input() actionName: string = "Save";
  @Input() pending = false;

  onModalClose() {
    this.closeModal.emit();
  }

  onActionConfirmed() {
    this.actionConfirmed.emit();
  }
}
