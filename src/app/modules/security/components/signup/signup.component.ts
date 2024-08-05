import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  constructor(private aFA:AngularFireAuth){}

  signupForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  async signup() {
    let email = this.signupForm.get('email')?.value;
    let pwd = this.signupForm.get('password')?.value;

    await this.aFA.createUserWithEmailAndPassword(email!,pwd!).then(response=>{
      console.log(response);
    })
  }

}
