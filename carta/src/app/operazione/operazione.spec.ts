import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Operazione } from './operazione';

describe('Operazione', () => {
  let component: Operazione;
  let fixture: ComponentFixture<Operazione>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Operazione]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Operazione);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
