import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArgusAssessComponent } from './argus-assess.component';
import { FormsModule } from '@angular/forms';
import {MatProgressBarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [ArgusAssessComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressBarModule
  ],
  exports: [ArgusAssessComponent]
})
export class ArgusAssessModule { }
