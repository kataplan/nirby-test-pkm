import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { GrassComponent } from './views/grass/grass.component';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { CapturesComponent } from './views/captures/captures.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'grass', component: GrassComponent,
    ...canActivate(() => redirectUnauthorizedTo(['']))
  },
  {
    path: 'captures', component: CapturesComponent,
    ...canActivate(() => redirectUnauthorizedTo(['']))
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
