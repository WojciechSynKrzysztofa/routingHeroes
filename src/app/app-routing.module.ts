import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrisisListComponent }  from './crisis-list/crisis-list.component';
import { NotFoundComponent }    from './not-found/not-found.component';


const routes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
