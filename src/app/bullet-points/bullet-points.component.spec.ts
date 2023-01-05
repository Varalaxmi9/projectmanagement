import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletPointsComponent } from './bullet-points.component';

describe('BulletPointsComponent', () => {
  let component: BulletPointsComponent;
  let fixture: ComponentFixture<BulletPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulletPointsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulletPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
