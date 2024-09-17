import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {
  private _idProductEventEmitter = new EventEmitter();

  constructor() {
  }

  get idProductEventEmitter() {
    return this._idProductEventEmitter;
  }
}
