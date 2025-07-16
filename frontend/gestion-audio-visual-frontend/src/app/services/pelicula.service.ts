import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface Pelicula {
  id?: number;
  titulo: string;
  director: string;
  anio: number;
}



@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
    private apiUrl = 'http://localhost:8080/api/peliculas';

  constructor(private http: HttpClient) {}

  obtenerPeliculas(): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(this.apiUrl);
  }

  crearPelicula(p: Pelicula): Observable<Pelicula> {
    return this.http.post<Pelicula>(this.apiUrl, p);
  }

  actualizarPelicula(id: number, p: Pelicula): Observable<Pelicula> {
    return this.http.put<Pelicula>(`${this.apiUrl}/${id}`, p);
  }

  eliminarPelicula(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  
}
