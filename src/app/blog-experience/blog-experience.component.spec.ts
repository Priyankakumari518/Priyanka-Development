import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogExperienceComponent } from './blog-experience.component';

describe('BlogExperienceComponent', () => {
  let component: BlogExperienceComponent;
  let fixture: ComponentFixture<BlogExperienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogExperienceComponent]
    });
    fixture = TestBed.createComponent(BlogExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
