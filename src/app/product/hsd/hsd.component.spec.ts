import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HsdComponent } from './hsd.component';

describe('HsdComponent', () => {
  let component: HsdComponent;
  let fixture: ComponentFixture<HsdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HsdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HsdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
