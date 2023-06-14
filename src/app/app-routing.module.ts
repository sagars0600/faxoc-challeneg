import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { CardComponent } from './card/card.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { DropdownTasksComponent } from './dropdown-tasks/dropdown-tasks.component';

const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'card', component: CardComponent },
  { path: 'card/:id', component: CardDetailsComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'dropdown', component: DropdownTasksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
