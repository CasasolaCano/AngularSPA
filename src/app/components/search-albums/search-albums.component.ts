import { Component, OnInit } from '@angular/core';
import { AlbumsService, Album } from '../../services/albums.services';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-search-albums',
  templateUrl: './search-albums.component.html',
  styleUrls: ['./search-albums.component.css']
})
export class SearchAlbumsComponent implements OnInit {

  albums:Album[] = [];

  constructor(private _albumsService:AlbumsService, private _activatedRoute:ActivatedRoute) {

    this._activatedRoute.params.subscribe(params => {
      this.albums = this._albumsService.searchAlbums(params['termino']);
    })
   }

  ngOnInit(): void {

  }

  verAlbum(idx:number) {

  }

}
