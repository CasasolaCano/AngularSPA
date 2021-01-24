import { Component, OnInit } from '@angular/core';
import { AlbumsService, Album } from '../../services/albums.services';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html'
})
export class AlbumsComponent implements OnInit {


  albums:Album[] = [];

  constructor( private _albumsService:AlbumsService) {

    console.log("Constructor");
   }

  ngOnInit(): void {
    
    this.albums = this._albumsService.getAlbums();

    console.log(this.albums);

  }

}
