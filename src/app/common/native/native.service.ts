import { Injectable } from '@angular/core';

@Injectable()
export class NativeService {

  constructor() { }

  setData(value) {
    console.log('setData', value);
  }

  getData() {
    return {mock: true};
  }

}