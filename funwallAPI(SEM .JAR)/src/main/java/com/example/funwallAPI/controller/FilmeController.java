package com.example.funwallAPI.controller;

import com.example.funwallAPI.model.Filme;
import com.example.funwallAPI.repository.FilmeRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


import java.io.IOException;
import java.util.Optional;

@RestController
@RequestMapping("/filmes")
public class FilmeController {

    private final FilmeRepository filmeRepository;

    public FilmeController(FilmeRepository filmeRepository) {
        this.filmeRepository = filmeRepository;
    }

    @CrossOrigin
    @GetMapping
    public ResponseEntity getAllFilmes() {
        return ResponseEntity.ok(this.filmeRepository.findAll());
    }

    @CrossOrigin
    @PostMapping
    public ResponseEntity addFilme(@RequestBody Filme filme) {
        filmeRepository.save(filme);
        return ResponseEntity.ok().build();
    }

    @CrossOrigin
    @PostMapping("/add-com-imagem")
    public ResponseEntity addFilmeComImagem(@RequestParam("filme") Filme filme,
                                            @RequestParam("imagem") MultipartFile imagem) {
        try {
            filme.setImagem(imagem.getBytes());
            filmeRepository.save(filme);
            return ResponseEntity.ok().build();
        } catch (IOException e) {
            // Trate qualquer exceção de IO, se necessário
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
    @CrossOrigin
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
    @CrossOrigin
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
