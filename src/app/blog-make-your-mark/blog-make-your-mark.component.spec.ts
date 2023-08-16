import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogMakeYourMarkComponent } from './blog-make-your-mark.component';

describe('BlogMakeYourMarkComponent', () => {
  let component: BlogMakeYourMarkComponent;
  let fixture: ComponentFixture<BlogMakeYourMarkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogMakeYourMarkComponent]
    });
    fixture = TestBed.createComponent(BlogMakeYourMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
