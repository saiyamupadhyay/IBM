import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DateComponent } from './date.component';
import { BadgeComponent } from './components/badge/badge.component';
import { CardComponent } from './components/card/card.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { TableComponent } from './components/table/table.component';
import { TodosComponent } from './components/todos/todos.component';
import { SearchPipe } from './pipes/search.pipe';
import { FirstCapitalPipe } from './pipes/first-capital.pipe';

@NgModule({
  declarations: [
    AppComponent, DateComponent, BadgeComponent, CardComponent,JumbotronComponent, TableComponent, TodosComponent, SearchPipe, FirstCapitalPipe
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }