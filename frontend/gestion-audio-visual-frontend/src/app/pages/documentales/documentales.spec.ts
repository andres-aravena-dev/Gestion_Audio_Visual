import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Documentales } from './documentales';

describe('Documentales', () => {
  let component: Documentales;
  let fixture: ComponentFixture<Documentales>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Documentales]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Documentales);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
