import { Component, HostListener, OnInit, Optional } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  public pageTitle = 'Default page title'

  constructor(private _snackbar: MatSnackBar) {}

  ngOnInit(): void {
    // this.pause('pause')
  }
  // ngOnChanges(): void  {}
  // ngToCheck(): void  {}
  // ngOnDestroy(): void  {}

  @HostListener('window:keydown.control.shift.p')
  pause(text: string) {
    this.openSnack(text)
  }

  openSnack(text: string = 'default text'): void {
    this._snackbar.open(text, 'Ok !')
  }
}
