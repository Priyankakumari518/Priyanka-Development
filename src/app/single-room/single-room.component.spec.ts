import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRoomComponent } from './single-room.component';

describe('SingleRoomComponent', () => {
  let component: SingleRoomComponent;
  let fixture: ComponentFixture<SingleRoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleRoomComponent]
    });
    fixture = TestBed.createComponent(SingleRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
