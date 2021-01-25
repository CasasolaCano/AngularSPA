import { Component, OnInit } from '@angular/core';
import { AlbumsService, Album } from '../../services/albums.services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html'
})
export class AlbumsComponent implements OnInit {


  albums:Album[] = [];

  constructor( private _albumsService:AlbumsService, private _router:Router) {

    
   }

  ngOnInit(): void {
    
    this.albums = this._albumsService.getAlbums();

    console.log(this.albums);

  }

  verAlbum(idx:number) {
    this._router.navigate(['/album', idx]);
  }

}
