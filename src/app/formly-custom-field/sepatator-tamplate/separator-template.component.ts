import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-separator-template',
  templateUrl: './separator-template.component.html',
  styleUrls: ['./separator-template.component.scss'],
})
export class SeparatorTemplateComponent extends FieldType implements OnInit {

  text: string;

  ngOnInit(): void {
    console.log(this.field);
    this.text = this.field.templateOptions.label;
  }

}
