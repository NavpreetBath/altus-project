import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArgusAssessComponent } from './argus-assess.component';
import { FormsModule } from '@angular/forms';
import {MatProgressBarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('ArgusAssessComponent', () => {
  let component: ArgusAssessComponent;
  let fixture: ComponentFixture<ArgusAssessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArgusAssessComponent ],
      imports: [
        FormsModule,
        BrowserAnimationsModule,
        MatProgressBarModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArgusAssessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
