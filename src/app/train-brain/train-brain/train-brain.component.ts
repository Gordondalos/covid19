import { Component, OnInit } from '@angular/core';
import { SymptomsInterface } from '../../symptomsInterface';
import { BrainService } from '../../brain.service';

@Component({
  selector: 'app-train-brain',
  templateUrl: './train-brain.component.html',
  styleUrls: ['./train-brain.component.scss'],
})
export class TrainBrainComponent implements OnInit {

  config = {};
  net: any;

  constructor(
    private brainService: BrainService,
  ) {
  }

  ngOnInit(): void {
    const brain = window[ 'brain' ]; // получим либу
    this.net = new brain.NeuralNetwork(); // создадим сеть
    // тренируем сеть
    this.net.train([
      {
        input: Object.values(this.getTrainData(0)),
        output: { cold: 1 },
      },
      {
        input: Object.values(this.getTrainData(1)),
        output: { flu: 1 },
      },
      {
        input: Object.values(this.getTrainData(2)),
        output: { noro: 1 },
      },
      {
        input: Object.values(this.getTrainData(3)),
        output: { korono: 1 },
      },
    ]);
    this.brainService.setNet(this.net);
  }


  getTrainData(index: number): any {

    const res = new SymptomsInterface(
      1,
      1,
      1,
      0.5,
      0.5,
      0.2,
      0.2,
      0.2,
      0.2,
      0.2,
      0.2,
      0.2,
      0.2,
      0.2,
    );

    const res2 = new SymptomsInterface(
      0.5,
      0.5,
      0.5,
      1,
      1,
      1,
      1,
      1,
      1,
      0.2,
      0.2,
      0.2,
      0.2,
      0.2,
    );

    const res3 = new SymptomsInterface(
      0.2,
      0.2,
      0.2,
      0.2,
      0.5,
      0.5,
      0.5,
      0.5,
      0.5,
      0.2,
      1,
      1,
      1,
      1,
    );

    const res4 = new SymptomsInterface(
      0,
      0,
      0,
      1,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
    );

    switch (index) {
      case 0:
        return res;
      case 1:
        return res2;
      case 2:
        return res3;
      case 3:
        return res4;
    }

  }

}
