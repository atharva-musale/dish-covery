import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { fromEvent, of } from 'rxjs';
import { distinctUntilChanged, map, throttleTime } from 'rxjs/operators';
import { ToolbarComponent, RestaurantsGridComponent } from './components';

@Component({
  selector: 'app-root',
  imports: [AsyncPipe, RestaurantsGridComponent, ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit {
  public readonly headerImageUrl = 'url(https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png)';
  @ViewChild('pageHeader') private pageHeader?: ElementRef<HTMLElement>;

  /**
   * Observable that emits true when the header is scrolled out of view, and false otherwise.
   * This is used to apply a "scrolled" class to the toolbar when the user scrolls down the page.
   */
  public isScrolled$ = of(false);

  public ngAfterViewInit() {
    this.isScrolled$ = fromEvent(window, 'scroll').pipe(
      throttleTime(100, undefined, { trailing: true }),
      map(() => this.isHeaderOutOfView()),
      distinctUntilChanged()
    );
  }

  /**
   * Checks if the page header is out of view by comparing its bottom
   * position to the top of the viewport.
   *
   * @returns True if the header is out of view, false otherwise. 
   */
  private isHeaderOutOfView(): boolean {
    return (this.pageHeader?.nativeElement.getBoundingClientRect().bottom ?? 1) <= 0;
  }
}
