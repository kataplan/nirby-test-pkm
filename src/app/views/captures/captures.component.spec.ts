import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturesComponent } from './captures.component';

describe('CapturesComponent', () => {
  let component: CapturesComponent;
  let fixture: ComponentFixture<CapturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
