package com.video_gestion.gestion_audio_visual.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.video_gestion.gestion_audio_visual.model.Pelicula;

@Repository
public interface PeliculaRepository  extends JpaRepository<Pelicula, Long>{

    /* la Extencion a JPA,permite  usar los metodos, me dejo como recordatorio los mas usados

   LEER: findById(id) • getReferenceById(id) • findAll() • findAllById(ids) • findAll(Pageable) • findAll(Sort)
   BORRAR: deleteById(id) • delete(entity) • deleteAll() • deleteAllById(Iterable) • deleteAllInBatch()
   CREAR/ACTUALIZAR:  save(entity) • saveAll(Iterable) • saveAndFlush(entity)
   SINCRONIZAR BD: flush()
   
   */ 
} 