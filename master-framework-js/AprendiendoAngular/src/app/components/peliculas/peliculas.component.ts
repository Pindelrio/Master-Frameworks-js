import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service'; 

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers:[PeliculaService]
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo:string;
  public peliculas: Array<Pelicula>;
  public fecha: any;
  public favorita!: Pelicula;

  constructor(private _peliculaService: PeliculaService) { 
    this.titulo ="Películas";
    this.peliculas = this._peliculaService.getPeliculas();
    this.fecha = new Date(2020,8,21);
    console.log("Constructor fired");
  }

  ngOnInit(): void {
    console.log("OnInit lanzado");
    console.log(this._peliculaService.helloWorld());
  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    
  }
  ngOnDestroy(){
    console.log("El componente se va a eliminar");
  }
  cambiarTitulo(): void {
    this.titulo = "Cambio de titulo";
  }
  mostrarFavorita($event:Pelicula):void{
    this.favorita = $event;
    console.log(this.favorita);
  }
}
