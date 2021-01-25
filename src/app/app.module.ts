import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { APP_ROUTING } from './app.routes';

//Servicios

import { AlbumsService } from './services/albums.services';



//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { AlbumComponent } from './components/album/album.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    AlbumsComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING           //El routing se coloca en los imports
  ],
  providers: [            //Los servicios se colocan en los providers
    AlbumsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
