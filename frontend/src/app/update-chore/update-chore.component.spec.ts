import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateChoreComponent } from './update-chore.component';

describe('UpdateChoreComponent', () => {
  let component: UpdateChoreComponent;
  let fixture: ComponentFixture<UpdateChoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateChoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateChoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
