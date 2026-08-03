import { MatDialogRef } from '@angular/material/dialog';

export class MockMatDialogRef {
  public close = vi.fn();
}

export function provideMockDialogRef() {
  return { provide: MatDialogRef, useClass: MockMatDialogRef };
}
