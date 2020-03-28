import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Covid 19';

  form = new FormGroup({});
  model = {};

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
          type: 'input',
          className: 'w-50 mr8',
          templateOptions: {
            label: 'Пол (М/Ж)',
            floatingLabel: 'always',
            placeholder: 'Укажите пол (М/Ж)',
            required: true,
            appearance: 'outline',
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
          key: 'Sneezing',
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
          key: 'Chills',
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

  onSubmit(model: any) {
    console.log(this.model);
  }
}
