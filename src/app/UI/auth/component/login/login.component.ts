import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginAuthUseCase } from 'src/app/user/application/use_case_auth/login-auth.usecase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    username: [''],
    password: [''],
  });

  constructor(private login:LoginAuthUseCase, private fb:FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    const formValue = this.loginForm.value;
    this.login.login(formValue).subscribe(res => {
      if(res){
        this.router.navigate(['']);
      }
    })
  }

}
