import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicsStudyComponent } from './topics-study.component';

describe('TopicsStudyComponent', () => {
  let component: TopicsStudyComponent;
  let fixture: ComponentFixture<TopicsStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicsStudyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicsStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
