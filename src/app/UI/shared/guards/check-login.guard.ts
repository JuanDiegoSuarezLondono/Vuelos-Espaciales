import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CheckTokenAuthUseCase } from 'src/app/user/application/use_case_auth/check-token-auth.usecase';

@Injectable({
  providedIn: 'root'
})
export class CheckLoginGuard implements CanActivate {

  constructor(private checkToken:CheckTokenAuthUseCase,private router:Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let haveToken:boolean = this.checkToken.checkToken();
      if(!haveToken){
     this.router.navigate(['/auth']);
    }
    return haveToken;
  }
  
}
