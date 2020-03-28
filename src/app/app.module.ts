import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SeparatorTemplateComponent } from './formly-custom-field/sepatator-tamplate/separator-template.component';

@NgModule({
  declarations: [
    AppComponent,
    SeparatorTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormlyMaterialModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,

    FormlyModule.forRoot({
      types: [
        {
          name: 'separator',
          component: SeparatorTemplateComponent,
        },
      ],
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
