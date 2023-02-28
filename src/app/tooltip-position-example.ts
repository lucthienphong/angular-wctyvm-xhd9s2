import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';

/**
 * @title Tooltip with a custom position
 */
@Component({
  selector: 'tooltip-position-example',
  templateUrl: 'tooltip-position-example.html',
  styleUrls: ['tooltip-position-example.css'],
})
export class TooltipPositionExample {
  positionOptions: TooltipPosition[] = [
    'after',
    'before',
    'above',
    'below',
    'left',
    'right',
  ];
  position = new FormControl(this.positionOptions[0]);
  showDelay = new FormControl(1000);
  hideDelay = new FormControl(2000);
  title = '';

  async ngOnInit(): Promise<void> {
    this.test();
  }
  test() {
    let nghQuocTichKhacStr: any = '';
    let quocTichs: string[] = ['GR', 'KW', 'HK', 'LB'];

    //for (let i = 0; i < 8; i++) {
    for (let i = 0; i < quocTichs.length; i++) {
      this.title += quocTichs[i];
      if (i < quocTichs.length - 1) this.title += ',';
    }
    if (this.title != '') {
      this.title = '["\'' + this.title + '\'"]';
    }
    console.log(this.title);
  }
}

/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
