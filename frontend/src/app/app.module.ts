import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChoreListComponent } from './chore-list/chore-list.component';
import { CreateChoreComponent } from './create-chore/create-chore.component';
import { UpdateChoreComponent } from './update-chore/update-chore.component';
import { FilterChoresComponent } from './filter-chores/filter-chores.component';

@NgModule({
  declarations: [
    AppComponent,
    ChoreListComponent,
    CreateChoreComponent,
    UpdateChoreComponent,
    FilterChoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
