import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSustainableComponent } from './blog-sustainable.component';

describe('BlogSustainableComponent', () => {
  let component: BlogSustainableComponent;
  let fixture: ComponentFixture<BlogSustainableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogSustainableComponent]
    });
    fixture = TestBed.createComponent(BlogSustainableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
