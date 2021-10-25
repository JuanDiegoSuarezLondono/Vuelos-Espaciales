import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  role = localStorage.getItem('role') || 1;

  constructor(private authSvc:AuthService) {

   }

  ngOnInit(): void {
  }

  onLogout():void {
    this.authSvc.logout();
  }

}
