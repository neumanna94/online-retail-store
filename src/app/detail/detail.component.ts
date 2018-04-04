import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AlbumService } from '../album.service';
import { Location } from '@angular/common';
import { Album } from '../album.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [AlbumService]
})
export class DetailComponent implements OnInit {
  albumId: string;
  albumToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private albumService: AlbumService) {}


  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.albumId = urlParameters['id'];
    });
    this.albumToDisplay = this.albumService.getAlbumById(this.albumId);
  }

}
