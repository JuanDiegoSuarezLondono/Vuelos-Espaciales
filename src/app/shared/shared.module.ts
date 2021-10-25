import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { UsertypePipe } from './pipes/userType/usertype.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    UsertypePipe,
  ],
  exports: [
    HeaderComponent,
    UsertypePipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
