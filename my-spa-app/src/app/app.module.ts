import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { ViewEmployeeComponent } from './components/view-employee/view-employee.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router'
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'add', component:  AddEmployeeComponent},
  { path: 'view',component: ViewEmployeeComponent },
  
];

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    ViewEmployeeComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
