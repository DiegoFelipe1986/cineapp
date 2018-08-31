import { Component, OnInit } from '@angular/core';
import { PeliculasService } from "../../services/peliculas.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-pelicula',
    templateUrl: './pelicula.component.html',
    styles: []
})

export class PeliculaComponent implements OnInit {

    pelicula:any;
    regresar:string = "";
    constructor( public _ps:PeliculasService,
                public route:ActivatedRoute ) {

            this.route.params.subscribe( parametros =>{
            this.regresar = parametros['pag'];
            this._ps.getPelicula( parametros['id'] ).subscribe(
                    pelicula=>this.pelicula=pelicula
                )
        })
    }



    ngOnInit() {
    }

}
