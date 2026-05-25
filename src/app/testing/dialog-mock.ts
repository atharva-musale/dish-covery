import { MatDialogRef } from '@angular/material/dialog';

export class MockMatDialogRef {
  public close = jasmine.createSpy('close');
}

export function provideMockDialogRef() {
  return { provide: MatDialogRef, useClass: MockMatDialogRef };
}
