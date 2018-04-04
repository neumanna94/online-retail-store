import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AlbumService {
  //FirebaseObjectObservable used to track when a change on the page or in database occurs.
  albums: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.albums = database.list('albums');
    console.log(this.albums);
  }

  getAlbums() {
    console.log("Get Albums was called!");
    console.log(this.albums);
    return this.albums;
  }
  addAlbum(newAlbum: Album){
    this.albums.push(newAlbum);
  }
  getAlbumById(albumId: string){
    return this.database.object('albums/' + albumId);
  }
}
