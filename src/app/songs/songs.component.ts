import { Component, OnInit } from '@angular/core';
import {Song} from '../song';
import {SongService} from '../song.service';
import {SongDetailComponent} from '../song-detail/song-detail.component';
@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {
  songs;
  selectedSong: Song;
  getSongs(): void {
  this.songs = this.songService.getSongs();
  }

  constructor(private songService: SongService) { }

  ngOnInit() {
    this.getSongs();
  }
  onSelect(song: Song): void {
    this.selectedSong = song;
  }
}
