import { Injectable } from '@angular/core';

function getWindow(): any {
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class WindowReferenceService {
  get nativeWindow () {
    if (typeof window !== undefined) {
      return getWindow();
    } else {
      return undefined;
    }
  }
  constructor() { }
}
