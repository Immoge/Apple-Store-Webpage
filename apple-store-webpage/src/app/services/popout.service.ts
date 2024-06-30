import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopoutService {
  private _isVisible = new BehaviorSubject<boolean>(false);
  isVisible$ = this._isVisible.asObservable();

  show(): void {
    this._isVisible.next(true);
  }

  hide(): void {
    this._isVisible.next(false);
  }
}