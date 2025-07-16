import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pelicula, PeliculaService } from '../../services/pelicula.service';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-documentales',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCardModule],
  templateUrl: './documentales.html',
  styleUrls: ['./documentales.css'],
})
export class DocumentalesComponent implements OnInit {
  peliculas: Pelicula[] = [];
  displayedColumns = ['titulo', 'director', 'anio'];

  constructor(private peliculaService: PeliculaService) {}

  ngOnInit(): void {
    this.peliculaService.obtenerPeliculas().subscribe((data) => {
      this.peliculas = data;
    });
  }
}
