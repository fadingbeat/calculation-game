import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.scss'],
})
export class CalculationComponent implements OnInit {
  title: string = 'Calculation Game';
  digitOne: number = 0;
  digitTwo: number = 0;
  result;
  calculationResult;
  calculationForm: FormGroup;
  min = 4;
  max = 6;
  comment: string = '';
  emptyValue = '';
  calculation: string;
  calculationArr: string[] = [];

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
    this.digitOne = Math.floor(Math.random() * this.min);
    this.digitTwo = Math.floor(Math.random() * this.max);
  }

  createForm() {
    this.calculationForm = this.fb.group({
      digitOne: [{ value: '', disabled: true }, Validators.required],
      digitTwo: [{ value: '', disabled: true }, Validators.required],
      result: [this.emptyValue],
    });
  }

  onKeyPress(event: any) {
    this.result = of(event.target.value);
    let formula: string = `${this.digitOne} + ${this.digitTwo} = `;

    this.calculationResult = this.digitOne + this.digitTwo;
    this.compareResults();

    this.result.subscribe(
      (msg) => (this.calculation = formula + msg.toString())
    );
    this.calculationArr.push(`${this.calculation} ${this.comment}`);
    this.digitOne = Math.floor(Math.random() * this.min);
    this.digitTwo = Math.floor(Math.random() * this.max);
    this.emptyValue = '';
  }

  compareResults() {
    this.result.subscribe((res) => {
      if (this.calculationResult == res) {
        this.comment = 'CORRECT!';
      } else if (this.calculationResult != res) {
        this.comment = 'WRONG!';
      }
    });
  }
}
