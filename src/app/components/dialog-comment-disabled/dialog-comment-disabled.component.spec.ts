import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCommentDisabledComponent } from './dialog-comment-disabled.component';

describe('DialogCommentDisabledComponent', () => {
  let component: DialogCommentDisabledComponent;
  let fixture: ComponentFixture<DialogCommentDisabledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCommentDisabledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCommentDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
