import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { ViewQuizComponent } from './components/view-quiz/view-quiz.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TakeQuizComponent } from './components/take-quiz/take-quiz.component';
import { ResultComponent } from './components/result/result.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
const appRoutes: Routes = [
  { path: 'view',component: ViewQuizComponent } ,
  { path: 'takeQuiz',component: TakeQuizComponent } ,
  { path: 'viewResult',component: ResultComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    ViewQuizComponent,
    TakeQuizComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    MatProgressBarModule,
    MatSliderModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
