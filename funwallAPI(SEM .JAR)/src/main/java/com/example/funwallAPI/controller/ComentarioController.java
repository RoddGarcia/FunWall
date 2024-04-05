package com.example.funwallAPI.controller;

import com.example.funwallAPI.model.Comentario;
import com.example.funwallAPI.repository.ComentarioRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/comentarios")
public class ComentarioController {

    private final ComentarioRepository comentarioRepository;
    Comentario comentario = new Comentario();


    public ComentarioController(ComentarioRepository comentarioRepository) {
        this.comentarioRepository = comentarioRepository;
    }
    @CrossOrigin
    @GetMapping
    public ResponseEntity getAllComentarios() {
        return ResponseEntity.ok(this.comentarioRepository.findAll());
    }

    @CrossOrigin
    @PostMapping
    public ResponseEntity addComentario(@RequestBody Comentario comentario) {
        comentarioRepository.save(comentario);
        return ResponseEntity.ok().build();
    }
    @CrossOrigin
    @PutMapping("/{id}")
    public ResponseEntity<Comentario> putComentario(@PathVariable Long id, @RequestBody Comentario comentarioAtualizado) {
        Optional<Comentario> optionalComentario = comentarioRepository.findById(id);
        if (optionalComentario.isPresent()) {
            comentarioAtualizado.setId(id);
            Comentario comentarioSalvo = comentarioRepository.save(comentarioAtualizado);
            return ResponseEntity.ok(comentarioSalvo);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @CrossOrigin
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteComentario(@PathVariable Long id) {
        Optional<Comentario> optionalComentario = comentarioRepository.findById(id);
        if (optionalComentario.isPresent()) {
            comentarioRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
