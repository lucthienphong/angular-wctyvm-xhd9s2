import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialExampleModule } from '../material.module';
import { TooltipPositionExample } from './tooltip-position-example';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import {
  MatTooltipDefaultOptions,
  MAT_TOOLTIP_DEFAULT_OPTIONS,
} from '@angular/material/tooltip';

export const OtherOptions: MatTooltipDefaultOptions = {
  showDelay: 1000,
  hideDelay: 2000,
  touchGestures: 'auto',
  position: 'before',
  touchendHideDelay: 0,
  disableTooltipInteractivity: true,
};

@NgModule({
  declarations: [TooltipPositionExample],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: OtherOptions }],
  bootstrap: [TooltipPositionExample],
})
export class AppModule {}
