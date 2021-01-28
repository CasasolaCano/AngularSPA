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
  termino:string = "";

  constructor(private _albumsService:AlbumsService, private _activatedRoute:ActivatedRoute) {

    
  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.albums = this._albumsService.searchAlbums(params['termino']);
    })

  }

  verAlbum(idx:number) {

  }

}
