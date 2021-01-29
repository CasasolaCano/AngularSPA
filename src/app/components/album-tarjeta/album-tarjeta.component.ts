import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { __importDefault } from 'tslib';
import { Router } from '@angular/router';


@Component({
  selector: 'app-album-tarjeta',
  templateUrl: './album-tarjeta.component.html',
  styleUrls: ['./album-tarjeta.component.css']
})
export class AlbumTarjetaComponent implements OnInit {


  @Input() album:any = {};
  @Input() index:number = 0;

  @Output() albumSelected: EventEmitter<number>;

  constructor(private _router:Router) {
    this.albumSelected = new EventEmitter();
   }

  ngOnInit(): void {
  }

  verAlbum() {
    // this._router.navigate(['/album', this.index]);
    this.albumSelected.emit(this.index);
  }

}
