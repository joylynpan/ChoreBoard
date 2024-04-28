import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoreListComponent } from './chore-list/chore-list.component';
import { CreateChoreComponent } from './create-chore/create-chore.component';
import { UpdateChoreComponent } from './update-chore/update-chore.component';
import { FilterChoresComponent } from './filter-chores/filter-chores.component';

const routes: Routes = [
  {path: 'chores', component: ChoreListComponent},
  {path: 'create-chore', component: CreateChoreComponent},
  {path: 'filter-chores', component: FilterChoresComponent},
  {path: '', redirectTo: 'chores', pathMatch: 'full'},
  {path: 'update-chore/:id', component: UpdateChoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
