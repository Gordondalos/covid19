import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { DataService } from './data.service';
import { BrainService } from './brain.service';
import { SymptomsInterface } from './symptomsInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Covid 19';

  form = new FormGroup({});
  model: any;
  count: any;
  result: any;
  max: any;

  fields: FormlyFieldConfig[] = [
    {
      type: 'separator',
      templateOptions: {
        label: 'Ваши данные',
      },
    },
    {
      fieldGroupClassName: 'd-flex w100 ',
      fieldGroup: [
        {
          key: 'fio',
          type: 'input',
          className: 'w-50 mr8',
          templateOptions: {
            label: 'Фамилия Имя Отчетство',
            floatingLabel: 'always',
            placeholder: 'Фамилия Имя Отчетсво',
            required: true,
            appearance: 'outline',
          },
        },
        {
          key: 'phone',
          type: 'input',
          className: 'w-50 mr8',
          templateOptions: {
            label: 'Телефон',
            floatingLabel: 'always',
            placeholder: 'Телефон',
            required: true,
            appearance: 'outline',
          },
        },
      ],
    },
    {
      fieldGroupClassName: 'd-flex w100 ',
      fieldGroup: [
        {
          key: 'address',
          type: 'textarea',
          className: 'w100 mr8',
          templateOptions: {
            label: 'Адресс',
            rows: 3,
            floatingLabel: 'always',
            placeholder: 'Введите адресс проживания',
            required: true,
            appearance: 'outline',
          },
        },
      ],
    },
    {
      fieldGroupClassName: 'd-flex w100 ',
      fieldGroup: [
        {
          key: 'sex',
          type: 'select',
          className: 'w-50 mr8',
          templateOptions: {
            label: 'Пол',
            floatingLabel: 'always',
            required: true,
            appearance: 'outline',
            options: [
              { label: 'Мужчина', value: 1 },
              { label: 'Женьщина', value: 0 },
            ],
          },
        },
        {
          key: 'age',
          type: 'input',
          className: 'w-50 mr8',
          templateOptions: {
            label: 'Возраст (в годах)',
            floatingLabel: 'always',
            placeholder: 'Укажите возраст',
            required: true,
            appearance: 'outline',
          },
        },
      ],
    },
    {
      type: 'separator',
      templateOptions: {
        label: 'Симтомы',
      },
    },
    {
      fieldGroupClassName: 'd-flex w100 ',
      fieldGroup: [
        {
          key: 'soreThroat',
          type: 'select',
          className: 'w-50 mr8',
          templateOptions: {
            label: 'Боль в горле',
            floatingLabel: 'always',
            required: true,
            appearance: 'outline',
            options: [
              { label: 'Часто', value: 1 },
              { label: 'Иногда', value: 0.5 },
              { label: 'Редко', value: 0.2 },
              { label: 'Нет', value: 0 },
            ],
          },
        },
        {
          key: 'sneezing',
          type: 'select',
          className: 'w-50 ml8',
          templateOptions: {
            label: 'Чихание',
            floatingLabel: 'always',
            required: true,
            appearance: 'outline',
            options: [
              { label: 'Часто', value: 1 },
              { label: 'Иногда', value: 0.5 },
              { label: 'Редко', value: 0.2 },
              { label: 'Нет', value: 0 },
            ],
          },
        },
      ],
    },
    {
      fieldGroupClassName: 'd-flex w100 ',
      fieldGroup: [
        {
          key: 'runnyNose',
          type: 'select',
          className: 'w-50 mr8',
          templateOptions: {
            label: 'Заложеность носа и насморк',
            floatingLabel: 'always',
            required: true,
            appearance: 'outline',
            options: [
              { label: 'Часто', value: 1 },
              { label: 'Иногда', value: 0.5 },
              { label: 'Редко', value: 0.2 },
              { label: 'Нет', value: 0 },
            ],
          },
        },
        {
          key: 'cough',
          type: 'select',
          className: 'w-50 ml8',
          templateOptions: {
            label: 'Кашель, дискомфорт в груди',
            floatingLabel: 'always',
            required: true,
            appearance: 'outline',
            options: [
              { label: 'Часто', value: 1 },
              { label: 'Иногда', value: 0.5 },
              { label: 'Редко', value: 0.2 },
              { label: 'Нет', value: 0 },
            ],
          },
        },
      ],
    },
    {
      fieldGroupClassName: 'd-flex w100 ',
      fieldGroup: [
        {
          key: 'temperature',
          type: 'select',
          className: 'w-50 mr8',
          templateOptions: {
            label: 'Лихорадка повышение температуры',
            floatingLabel: 'always',
            required: true,
            appearance: 'outline',
            options: [
              { label: 'Часто', value: 1 },
              { label: 'Иногда', value: 0.5 },
              { label: 'Редко', value: 0.2 },
              { label: 'Нет', value: 0 },
            ],
          },
        },
        {
          key: 'fatigue',
          type: 'select',
          className: 'w-50 ml8',
          templateOptions: {
            label: 'Утомленность и слабость',
            floatingLabel: 'always',
            required: true,
            appearance: 'outline',
            options: [
              { label: 'Часто', value: 1 },
              { label: 'Иногда', value: 0.5 },
              { label: 'Редко', value: 0.2 },
              { label: 'Нет', value: 0 },
            ],
          },
        },
      ],
    },

    {
      fieldGroupClassName: 'd-flex w100 ',
      fieldGroup: [
        {
          key: 'bodyAches',
          type: 'select',
          className: 'w-50 mr8',
          templateOptions: {
            label: 'Ломота в теле',
            floatingLabel: 'always',
            required: true,
            appearance: 'outline',
            options: [
              { label: 'Часто', value: 1 },
              { label: 'Иногда', value: 0.5 },
              { label: 'Редко', value: 0.2 },
              { label: 'Нет', value: 0 },
            ],
          },
        },
        {
          key: 'chills',
          type: 'select',
          className: 'w-50 ml8',
          templateOptions: {
            label: 'Озноб',
            floatingLabel: 'always',
            required: true,
            appearance: 'outline',
            options: [
              { label: 'Часто', value: 1 },
              { label: 'Иногда', value: 0.5 },
              { label: 'Редко', value: 0.2 },
              { label: 'Нет', value: 0 },
            ],
          },
        },
      ],
    },

    {
      fieldGroupClassName: 'd-flex w100 ',
      fieldGroup: [
        {
          key: 'headache',
          type: 'select',
          className: 'w-50 mr8',
          templateOptions: {
            label: 'Головная боль',
            floatingLabel: 'always',
            required: true,
            appearance: 'outline',
            options: [
              { label: 'Часто', value: 1 },
              { label: 'Иногда', value: 0.5 },
              { label: 'Редко', value: 0.2 },
              { label: 'Нет', value: 0 },
            ],
          },
        },
        {
          key: 'difficultyBreathing',
          type: 'select',
          className: 'w-50 ml8',
          templateOptions: {
            label: 'Затруднение дыхания',
            floatingLabel: 'always',
            required: true,
            appearance: 'outline',
            options: [
              { label: 'Часто', value: 1 },
              { label: 'Иногда', value: 0.5 },
              { label: 'Редко', value: 0.2 },
              { label: 'Нет', value: 0 },
            ],
          },
        },
      ],
    },

    {
      fieldGroupClassName: 'd-flex w100 ',
      fieldGroup: [
        {
          key: 'nausea',
          type: 'select',
          className: 'w-50 mr8',
          templateOptions: {
            label: 'Тошнота',
            floatingLabel: 'always',
            required: true,
            appearance: 'outline',
            options: [
              { label: 'Часто', value: 1 },
              { label: 'Иногда', value: 0.5 },
              { label: 'Редко', value: 0.2 },
              { label: 'Нет', value: 0 },
            ],
          },
        },
        {
          key: 'vomiting',
          type: 'select',
          className: 'w-50 ml8',
          templateOptions: {
            label: 'Рвота',
            floatingLabel: 'always',
            required: true,
            appearance: 'outline',
            options: [
              { label: 'Часто', value: 1 },
              { label: 'Иногда', value: 0.5 },
              { label: 'Редко', value: 0.2 },
              { label: 'Нет', value: 0 },
            ],
          },
        },
      ],
    },

    {
      fieldGroupClassName: 'd-flex w100 ',
      fieldGroup: [
        {
          key: 'diarrhea',
          type: 'select',
          className: 'w-50 mr8',
          templateOptions: {
            label: 'Понос',
            floatingLabel: 'always',
            required: true,
            appearance: 'outline',
            options: [
              { label: 'Часто', value: 1 },
              { label: 'Иногда', value: 0.5 },
              { label: 'Редко', value: 0.2 },
              { label: 'Нет', value: 0 },
            ],
          },
        },
        {
          key: 'stomachAche',
          type: 'select',
          className: 'w-50 ml8',
          templateOptions: {
            label: 'Боль в желудке',
            floatingLabel: 'always',
            required: true,
            appearance: 'outline',
            options: [
              { label: 'Часто', value: 1 },
              { label: 'Иногда', value: 0.5 },
              { label: 'Редко', value: 0.2 },
              { label: 'Нет', value: 0 },
            ],
          },
        },
      ],
    },

  ];

  constructor(
    private dataService: DataService,
    private brainService: BrainService,
  ) {
  }

  async ngOnInit(): Promise<void> {
    this.count = await this.dataService.getCount();
  }

  async onSubmit(): Promise<void> {
    this.model = this.form.value;
    const res = await this.dataService.createRow(this.model);
    const data = new SymptomsInterface(
      this.model.soreThroat,
      this.model.sneezing,
      this.model.runnyNose,
      this.model.cough,
      this.model.temperature,
      this.model.fatigue,
      this.model.bodyAches,
      this.model.chills,
      this.model.headache,
      this.model.difficultyBreathing,
      this.model.nausea,
      this.model.vomiting,
      this.model.diarrhea,
      this.model.stomachAche,
    );
    this.result = this.brainService.getRes(data);
    this.getMaxResult()
  }

  getMaxResult(): void {
    const res = this.result;
    let max = { key: 'none', val: 0 };
    for (let key in res) {
      if (res[ key ] > max.val) {
        max = { key: key, val: res[ key ] };
      }
    }
    this.max = max;
  }


}
