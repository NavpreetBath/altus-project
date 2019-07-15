import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ArgusAssessModule} from '../components/argus-assess/argus-assess.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ArgusAssessModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
