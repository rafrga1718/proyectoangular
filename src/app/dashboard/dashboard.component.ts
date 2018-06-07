import { Component, OnInit } from '@angular/core';
import { Song } from '../song';
import { SongService } from '../song.service';
import {OrdenarPipe} from '../pipe_ordenar';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  songs;

  constructor(private songService: SongService) { }

  ngOnInit() {
    this.getSongs();
  }

  getSongs(): void {
    this.songs= this.songService.getSongs();
  }
  addfav(e): void{
    console.log('funciona');
    console.log(this.songs);
    console.log(e);
    this.songs[e].src= 'assets/fav_active.png';
  }
  addHero(newHero: string) {
    if (newHero) {
      console.log(newHero);
      return newHero;
    }
  }

}
