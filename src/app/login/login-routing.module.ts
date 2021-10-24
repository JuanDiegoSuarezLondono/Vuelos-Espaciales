import { NgModule } from "@angular/core";
import {Routes, RouterModule} from '@angular/router';
import {FormComponent} from "../login/components/form/form.component";

const routes: Routes = [
  {
      path:'',
      component: FormComponent,
  }  
];