import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'mortage-page',
  templateUrl: './mortage-page.component.html',
  styleUrl: './mortage-page.component.css'
})
export class MortagePageComponent {
private fb = inject(FormBuilder);

public myForm: FormGroup = this.fb.group({
  amount:['', [Validators.required]], // PV
  amountType: ['€',[Validators.required]],
  term:['',[Validators.required]], //n
  termType:[12,[Validators.required]],
  interestRate:['',[Validators.required]],
  mortgageType:['',[Validators.required]]
})

public m = 0
public total = 0
calculate(){
  const {amount,
    term,
    termType,
    interestRate,
    mortgageType } = this.myForm.value

    const r = interestRate/12
    const n = term*termType
    console.log(mortgageType, 'desde mortgage');

    if(mortgageType === "Interest Only") this.total = ((r*amount)/ 1-(1+r)**-n) * n
    else {
      this.m = (r*amount)/ 1-(1+r)**-n
      this.total = ((r*amount)/ 1-(1+r)**-n) * n
    }

}

clear(){
  this.myForm.reset({
    amount: 0,
    amountType: '€',
    term: '',
    termType: 12,
    interestRate: '',
    mortgageType: ''
  });
  this.m = 0
  this. total = 0
}
}
