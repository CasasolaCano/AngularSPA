import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { AlbumComponent } from './components/album/album.component';


const app_routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'albums', component: AlbumsComponent},
    {path: 'album/:id', component: AlbumComponent},
    {path:'**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);

