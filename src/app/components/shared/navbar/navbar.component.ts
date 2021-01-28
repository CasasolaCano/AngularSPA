import { Component, OnInit } from '@angular/core';
import { AlbumsService, Album } from '../../../services/albums.services';
import { Router } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _albumsService:AlbumsService, private _router:Router) {

   }

  ngOnInit(): void {
  }

  searchAlbum(termino:string) {
    this._router.navigate(['/albums', termino]);
  }

}
