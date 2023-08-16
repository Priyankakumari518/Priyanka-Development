import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogBarcelonaComponent } from './blog-barcelona.component';

describe('BlogBarcelonaComponent', () => {
  let component: BlogBarcelonaComponent;
  let fixture: ComponentFixture<BlogBarcelonaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogBarcelonaComponent]
    });
    fixture = TestBed.createComponent(BlogBarcelonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
