import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';

import { CalculationComponent } from './calculation.component';

describe('CalculationComponent', () => {
  let component: CalculationComponent;
  let fixture: ComponentFixture<CalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculationComponent],
      imports: [ReactiveFormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should subscribe to user input', () => {
    const event = { target: { value: '1' } };
    component.result = of(event);
    const spy = jest.spyOn(component, 'onKeyPress');
    component.onKeyPress(event);
    expect(spy).toHaveBeenCalled();
  });
  it('should set comment to CORRECT', () => {
    const event = { target: { value: '1' } };
    component.result = of(event);
    component.digitOne = 0;
    component.digitTwo = 1;
    const mock = '1';
    component.onKeyPress(event);
    const spy = spyOn(component, 'compareResults').and.returnValue(of(mock));
    component.compareResults();
    expect(spy).toHaveBeenCalled();
  });
});
