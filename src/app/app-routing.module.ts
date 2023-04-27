import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { GrassComponent } from './views/grass/grass.component';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  { path: '', component: HomeComponent, 
  ...canActivate(() => redirectLoggedInTo(['/grass'])) },
  { path: 'grass', component: GrassComponent, 
  ...canActivate(() => redirectUnauthorizedTo([''])) 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
