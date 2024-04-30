package com.example.funwallAPI.controller;

import com.example.funwallAPI.model.Filme;
import com.example.funwallAPI.repository.FilmeRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/filmes")
public class FilmeController {

    private final FilmeRepository filmeRepository;

    public FilmeController(FilmeRepository filmeRepository) {
        this.filmeRepository = filmeRepository;
    }

    @GetMapping
    public ResponseEntity getAllFilmes() {
        return ResponseEntity.ok(this.filmeRepository.findAll());
    }

    @PostMapping
    public ResponseEntity addFilme(@RequestBody Filme filme) {
        filmeRepository.save(filme);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Filme> putFilme(@PathVariable Long id, @RequestBody Filme filmeAtualizado) {
        Optional<Filme> optionalFilme = filmeRepository.findById(id);
        if (optionalFilme.isPresent()) {
            filmeAtualizado.setId(id);
            Filme filmeSalvo = filmeRepository.save(filmeAtualizado);
            return ResponseEntity.ok(filmeSalvo);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFilme(@PathVariable Long id) {
        Optional<Filme> optionalFilme = filmeRepository.findById(id);
        if (optionalFilme.isPresent()) {
            filmeRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
