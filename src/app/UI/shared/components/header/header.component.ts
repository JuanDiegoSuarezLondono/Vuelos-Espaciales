import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutAuthUseCase } from 'src/app/user/application/use_case_auth/logout-auth.usecase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  role = localStorage.getItem('role') || 1;

  constructor(private logout:LogoutAuthUseCase, private router:Router) {

   }

  ngOnInit(): void {
  }

  onLogout():void {
    this.logout.logout();
    this.router.navigate(['/auth']);
  }

}
