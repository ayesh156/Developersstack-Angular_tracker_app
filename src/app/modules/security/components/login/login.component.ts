import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',  
 
})
export class LoginComponent {

  constructor(private router:Router,private aFA:AngularFireAuth){}

  loginForm = new FormGroup({
    email:new FormControl('',[Validators.required, Validators.email]),
    password:new FormControl('',[Validators.required]),
  })

  login(){
    let email = this.loginForm.get('email')?.value;
    let pwd = this.loginForm.get('password')?.value;
    
    this.aFA.signInWithEmailAndPassword(email!,pwd!).then(response=>{
      this.router.navigateByUrl('/dashboard');
    })

  }

  loginWithGoogle(){
    return this.trigger(new GoogleAuthProvider());
  }

  trigger(provider:any):any{
    try {
      return this.aFA
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        console.log('You have been successfully logged in!');
      })
      .catch((error)=>{
        console.log(error);
      })
    } catch (error) {
      console.log(error);
    }
  }
}
