import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrassComponent } from './grass.component';

describe('GrassComponent', () => {
  let component: GrassComponent;
  let fixture: ComponentFixture<GrassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
