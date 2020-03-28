import { Injectable } from '@angular/core';
import { SymptomsInterface } from './symptomsInterface';

@Injectable({
  providedIn: 'root',
})
export class BrainService {

  net: any;

  constructor() {
  }

  setNet(net): void {
    this.net = net;
  }

  getCf(value: number, maxValue: number, minValue: number): number {
    if (value > maxValue) {
      value = maxValue;
    } else if (value < minValue) {
      value = minValue;
    }
    return value / maxValue;
  }

  getRes(data: SymptomsInterface): void {
    const dt = Object.values(data);
    console.log(dt);
    return  this.net.run(dt);
  }
}
