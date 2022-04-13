import { Injectable } from "@angular/core";
import { Pelicula } from "../models/pelicula";

@Injectable()
export class PeliculaService{

    public peliculas!:Pelicula[];
    constructor(){
        this.peliculas = [
            new Pelicula("Spiderman",2015,"https://www.elcomercio.com/wp-content/uploads/2021/11/Spiderman-700x391.jpg"),
            new Pelicula("Lord of the rings", 2016, "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg"),
            new Pelicula("Matrix", 2017, "https://m.media-amazon.com/images/I/51AhfnN47xL._SY445_.jpg"),
            new Pelicula("Matrix 2", 2018, "https://images-na.ssl-images-amazon.com/images/I/91YqSik3nrL._RI_.jpg")
          ];
    }
    helloWorld(){
        return "Hello World from an Angular service";
    }

    getPeliculas(){
        return this.peliculas;
    }
}