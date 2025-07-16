import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pelicula, PeliculaService } from '../../services/pelicula.service';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCardModule],
  templateUrl: './series.html',
  styleUrls: ['./series.css'],
})
export class SeriesComponent implements OnInit {
  peliculas: Pelicula[] = [];
  displayedColumns = ['titulo', 'director', 'anio'];

  constructor(private peliculaService: PeliculaService) {}

  ngOnInit(): void {
    this.peliculaService.obtenerPeliculas().subscribe((data) => {
      this.peliculas = data;
    });
  }
}
