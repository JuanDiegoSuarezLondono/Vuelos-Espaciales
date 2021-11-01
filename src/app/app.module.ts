import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './UI/layout/layout.component';
import { SharedModule } from './UI/shared/shared.module';
import { CoreModule } from './core/core.module';
import { UserGateway } from './user/domain/services/user-gateway';
import { UsersService } from './user/framework/controllers/users.service';
import { AuthGateWay } from './user/domain/services/auth-gateway';
import { AuthService } from './user/framework/controllers/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [
    {provide: UserGateway, useClass: UsersService},
    {provide: AuthGateWay, useClass: AuthService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
