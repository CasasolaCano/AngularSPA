import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../../services/albums.services';
// import { Router } from '@angular/router';



@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {

  album:any = {};

  constructor(private activatedRoute:ActivatedRoute, private _albumsService:AlbumsService) {
    
    this.activatedRoute.params.subscribe(params =>{
      this.album = this._albumsService.getAlbum(params['id']);
      console.log(this.album)
    })
   }


  //  goBack() {
  //    this._router.navigate(['/albums']);
  //  }
}
