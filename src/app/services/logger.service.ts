import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  x = "error";

  constructor() { }

  logInfo(x: string) {
    console.log(x);
  }
  logWarning(x: string) {
    console.log(x);
  }
  logError(x: string) {
    console.log(x);
  }
}
