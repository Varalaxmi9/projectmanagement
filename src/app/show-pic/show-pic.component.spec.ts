import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPicComponent } from './show-pic.component';

describe('ShowPicComponent', () => {
  let component: ShowPicComponent;
  let fixture: ComponentFixture<ShowPicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
