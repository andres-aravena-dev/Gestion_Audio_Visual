package com.video_gestion.gestion_audio_visual.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.video_gestion.gestion_audio_visual.model.Pelicula;
import com.video_gestion.gestion_audio_visual.repository.PeliculaRepository;

@Service
public class PeliculaService {

    private PeliculaRepository peliculaRepository;

    public PeliculaService(PeliculaRepository peliculaRepository) {
        this.peliculaRepository = peliculaRepository;
    }

    public List<Pelicula> obtenerTodas() {
        return peliculaRepository.findAll();
    }

    public Optional<Pelicula> obtenerPorId(Long id) {
        return peliculaRepository.findById(id);
    }

    public Pelicula crear(Pelicula pelicula) {
        return peliculaRepository.save(pelicula);
    }

    public Pelicula actualizar(Long id, Pelicula nuevaPelicula) {
        return peliculaRepository.findById(id).map(p -> {
            p.setTitulo(nuevaPelicula.getTitulo());
            p.setDirector(nuevaPelicula.getDirector());
            p.setAnio(nuevaPelicula.getAnio());
            return peliculaRepository.save(p);
        }).orElseGet(() -> {
            nuevaPelicula.setId(id);
            return peliculaRepository.save(nuevaPelicula);
        });
    }

    public void eliminar(Long id) {
        peliculaRepository.deleteById(id);
    }
}
