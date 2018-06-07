import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongsComponent }      from './songs/songs.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { SongDetailComponent }  from './song-detail/song-detail.component';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes = [
  { path: 'songs', component: SongsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: SongDetailComponent },
  { path: 'profile', component: ProfileComponent },


];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
