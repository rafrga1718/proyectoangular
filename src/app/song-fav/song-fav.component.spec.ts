import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongFavComponent } from './song-fav.component';

describe('SongFavComponent', () => {
  let component: SongFavComponent;
  let fixture: ComponentFixture<SongFavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongFavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
