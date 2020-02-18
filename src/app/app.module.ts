import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { ResultCardComponent } from './components/result-card/result-card.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchRequestComponent } from './components/search-request/search-request.component';
import { SortCriteriaListComponent } from './components/sort-criteria-list/sort-criteria-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SearchResultComponent,
    ResultCardComponent,
    HeaderComponent,
    SearchRequestComponent,
    SortCriteriaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
