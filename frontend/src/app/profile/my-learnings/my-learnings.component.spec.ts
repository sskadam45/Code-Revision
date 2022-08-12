import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLearningsComponent } from './my-learnings.component';

describe('MyLearningsComponent', () => {
  let component: MyLearningsComponent;
  let fixture: ComponentFixture<MyLearningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLearningsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLearningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
