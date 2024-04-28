import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterChoresComponent } from './filter-chores.component';

describe('FilterChoresComponent', () => {
  let component: FilterChoresComponent;
  let fixture: ComponentFixture<FilterChoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterChoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterChoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
