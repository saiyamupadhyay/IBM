import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { ViewSurveyComponent } from './components/view-survey/view-survey.component';
import { TakeSurveyComponent } from './components/take-survey/take-survey.component';
import { AddSurveyComponent } from './components/add-survey/add-survey.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './components/test/test.component';

const appRoutes: Routes = [
  { path: 'view',component: ViewSurveyComponent } ,
  { path: 'takeQuiz',component: TakeSurveyComponent } ,
  { path: 'addSurvey',component: AddSurveyComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ViewSurveyComponent,
    TakeSurveyComponent,
    AddSurveyComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
