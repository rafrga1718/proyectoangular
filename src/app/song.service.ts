import { Injectable } from '@angular/core';
import {Song} from './song';
import { Observable, of } from 'rxjs';
import {SONGS} from './mock_songs';
@Injectable({
  providedIn: 'root'
})
export class SongService {
  getSongs(): Song[]{
    return SONGS;
  }
  getSong(id: number): Observable<Song> {
    // TODO: send the message _after_ fetching the hero
    return of(SONGS.find(song => song.id === id));
  }

  constructor() { }
}
