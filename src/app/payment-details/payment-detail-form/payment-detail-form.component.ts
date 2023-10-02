import { Component } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { NgForm } from '@angular/forms'
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styles: [
  ]
})
export class PaymentDetailFormComponent {
  constructor(public service: PaymentDetailService,
    private toastr: ToastrService){

  }

  onSubmit(form: NgForm){
    if(form.valid){
      this.service.postPaymentDetail()
      .subscribe({
        next: res => {
          this.service.list = res as PaymentDetail[]
          this.service.reserForm(form)
          this.toastr.success('Inserted successfully', 'Payment Detail Register')
        },
        error: err => { console.log(err) }
      })
    }
    
  }
}
