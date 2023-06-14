import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownTasksComponent } from './dropdown-tasks.component';

describe('DropdownTasksComponent', () => {
  let component: DropdownTasksComponent;
  let fixture: ComponentFixture<DropdownTasksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownTasksComponent]
    });
    fixture = TestBed.createComponent(DropdownTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
