import { Component, OnInit } from '@angular/core';
import { PeliculasService } from "../../services/peliculas.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles: []
})
export class HomeComponent {

    cartelera:any;
    populares:any;
    popularesNinos:any;

    constructor( public _ps:PeliculasService ) {
        
        this._ps.getCartelera()
            .subscribe(data =>this.cartelera = data.results);

        this._ps.getPopulares()
            .subscribe(data =>this.populares = data.results);

        this._ps.getPopularesNinos()
            .subscribe(data =>this.popularesNinos = data.results);

        }



}
