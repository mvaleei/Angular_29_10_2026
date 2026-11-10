import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listato } from './listato';

describe('Listato', () => {
  let component: Listato;
  let fixture: ComponentFixture<Listato>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listato]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listato);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
