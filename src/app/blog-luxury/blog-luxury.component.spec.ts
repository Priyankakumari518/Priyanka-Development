import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogLuxuryComponent } from './blog-luxury.component';

describe('BlogLuxuryComponent', () => {
  let component: BlogLuxuryComponent;
  let fixture: ComponentFixture<BlogLuxuryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogLuxuryComponent]
    });
    fixture = TestBed.createComponent(BlogLuxuryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
