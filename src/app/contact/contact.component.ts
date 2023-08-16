import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import { FormGroup } from '@angular/forms';
import { FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
 form : FormGroup = this.fb.group({
from_name:['',[Validators.required,Validators.minLength(4),Validators.maxLength(40)]],
to_name:'Admin',
from_email:['',[Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
mobile: ['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
message:['',[Validators.minLength(0),Validators.maxLength(250)]] 
 });
constructor(private fb:FormBuilder){

}
async send(){
  emailjs.init('Pt4Ec7Vha-OYHn42C');
 let response = await  emailjs.send("service_kmy6zrt","template_ywql17b",{
  from_name: this.form.value.from_name,
  to_name: this.form.value.to_name,
  from_email: this.form.value.from_email,
  mobile: this.form.value.mobile,
  message: this.form.value.message,  
  });
  alert('Message has been sent.');
  
  this.form.reset();
}

}
