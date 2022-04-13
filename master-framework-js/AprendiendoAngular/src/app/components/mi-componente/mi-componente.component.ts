import { Component } from "@angular/core";

@Component({
    selector: 'mi-componente', 
    templateUrl: './mi-componente.component.html' 
    
})
export class MiComponente{

    public titulo: string;
    public comentario: string;
    public year: number;
    public mostrarPeliculas: boolean;
    constructor(){
        this.mostrarPeliculas = true;
        this.titulo = "Hello world b";
        this.comentario = "esto es un comentario";
        this.year = 2022;
        console.log("componente loaded");
        console.log(this.titulo, this.comentario, this.year);
    }

    ocultarPeliculas(): void{
        console.log("pulsado loaded");
        this.mostrarPeliculas = !this.mostrarPeliculas;
    }
}