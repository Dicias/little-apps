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
  amount:[0, [Validators.required]],
  amountType: ['',[Validators.required]],
  term:['',[Validators.required]],
  termType:['',[Validators.required]],
  interestRate:['',[Validators.required]],
  mortgageType:['',[Validators.required]]
})

public repayments = 0
public total = 0
calculate(){
  console.log(this.myForm.value);
  const {...amount} = this.myForm.value



}
}
