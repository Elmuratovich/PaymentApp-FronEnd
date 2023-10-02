import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PaymentDetail } from './payment-detail.model';
import { NgForm } from '@angular/forms'

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  url: string = environment.apiBaseUrl + '/PaymentDetails'
  list: PaymentDetail[] = [];
  formData: PaymentDetail = new PaymentDetail()
  constructor(private http: HttpClient) { }

  refreshList() {
    this.http.get(this.url)
      .subscribe({
        next: res => {
          this.list = res as PaymentDetail[]
        },
        error: err => { console.log(err) }
      })
  }

  postPaymentDetail() {
    return this.http.post(this.url, this.formData)
  }

  reserForm(form: NgForm){
    form.form.reset()
    this.formData = new PaymentDetail()
  }
}
