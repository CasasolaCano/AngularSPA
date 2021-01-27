import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AlbumsService {

    private albums:Album[] = [
        {
          nombre: "In the Court of the Crimson King",
          bio: "In the Court of the Crimson King (subtitled An Observation by King Crimson) is the debut studio album by English rock band King Crimson, released on 10 October 1969 by Island Records. The album is one of the first and most influential of the progressive rock genre, where the band combined the blues influences that rock music was founded upon with elements of jazz, classical, and symphonic music.",
          img: "assets/resources/img/king-crimson-court.jpg",
          launch: "1969",
          author:"assets/resources/img/King Crimson.jpg"
        },
        {
          nombre: "Fragile",
          bio: "Fragile is the fourth studio album by the English progressive rock band Yes, released on 26 November 1971 by Atlantic Records. It was the band's first album to feature keyboardist Rick Wakeman, who replaced founder member Tony Kaye after the group had finished touring their breakthrough record, The Yes Album.",
          img: "assets/resources/img/yes-fragile.jpg",
          launch: "11-26-1971",
          author:"assets/resources/img/Yes.jpg"
        },
        {
          nombre: "Mirage",
          bio: "There are five tracks on Mirage, two over 9 minutes. Those two are multi-part songs: 'Lady Fantasy' and 'Nimrodel/The Procession/The White Rider', the latter being about The Lord of the Rings. The album was released on Gama Records/Deram Records. Mick Rock shot the inner sleeve photo.",
          img: "assets/resources/img/mirage.jpg",
          launch: "04-01-1974",
          author: "assets/resources/img/Camel.jpg"
        },
        {
          nombre: "Moving Pictures",
          bio: "Moving Pictures is the eighth studio album by Canadian rock band Rush, released on February 12, 1981, through Anthem Records. After touring to support their previous album, Permanent Waves (1980), the band started to write and record new material in August 1980 with co-producer Terry Brown.",
          img: "assets/resources/img/moving-pictures-rush.jpg",
          launch: "02-12-1981",
          author:"assets/resources/img/Rush.jpg"
        },
        {
          nombre: "Lizard",
          bio: "Lizard is the third studio album by British progressive rock band King Crimson, released in December 1970 by Island Records in the UK, and in January 1971 by Atlantic Records in the United States and Canada.",
          img: "assets//resources/img/lizard-crimson.jpg",
          launch: "12-10-1970",
          author: "assets/resources/img/King Crimson.jpg"
        },
        {
          nombre: "Pawn Hearts",
          bio: "Pawn Hearts is the fourth album by English progressive rock band Van der Graaf Generator, released in October 1971 on Charisma Records.",
          img: "assets/resources/img/pawn-hearts.jpg",
          launch: "10-xx-1971",
          author: "assets/resources/img/Van der Graaf Generator.jpg"
        }
      ];

    constructor() {
        console.log("Service Ready");
    }

    getAlbums():Album[] {
        return this.albums;
    }

    getAlbum(idx:number) {
      return this.albums[idx];
    }

    searchAlbums( termino:string):Album[] {

      let albumsArr:Album[] = [];
      termino = termino.toLowerCase();

      for(let album of this.albums) {

        let name = album.nombre.toLowerCase();

        if(name.indexOf(termino) >= 0) {
          albumsArr.push(album)
        }

      }

      return albumsArr;

    }
}

export interface Album {
    nombre: string;
    bio:string;
    img:string;
    launch:string;
    author:string;
}