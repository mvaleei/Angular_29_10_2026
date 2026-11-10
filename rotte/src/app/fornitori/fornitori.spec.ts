import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fornitori } from './fornitori';

describe('Fornitori', () => {
  let component: Fornitori;
  let fixture: ComponentFixture<Fornitori>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fornitori]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fornitori);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
