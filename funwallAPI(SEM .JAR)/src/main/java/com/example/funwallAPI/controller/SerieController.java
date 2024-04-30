package com.example.funwallAPI.controller;

import com.example.funwallAPI.model.Serie;
import com.example.funwallAPI.repository.SerieRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

@RestController
@RequestMapping("/series")
public class SerieController {

    private final SerieRepository serieRepository;

    public SerieController(SerieRepository serieRepository) {
        this.serieRepository = serieRepository;
    }

    @CrossOrigin
    @GetMapping
    public ResponseEntity getAllSeries() {
        return ResponseEntity.ok(this.serieRepository.findAll());
    }

    @CrossOrigin
    @PostMapping
    public ResponseEntity addSerie(@RequestBody Serie serie) {
        serieRepository.save(serie);
        return ResponseEntity.ok().build();
    }

    @CrossOrigin
    @PostMapping("/add-com-imagem")
    public ResponseEntity addSerieComImagem(@RequestParam("serie") Serie serie,
                                            @RequestParam("imagem") MultipartFile imagem) {
        try {
            serie.setImagem(imagem.getBytes());
            serieRepository.save(serie);
            return ResponseEntity.ok().build();
        } catch (IOException e) {
            // Trate qualquer exceção de IO, se necessário
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
    @CrossOrigin
    @PutMapping("/{id}")
    public ResponseEntity<Serie> putSerie(@PathVariable Long id, @RequestBody Serie serieAtualizado) {
        Optional<Serie> optionalSerie = serieRepository.findById(id);
        if (optionalSerie.isPresent()) {
            serieAtualizado.setId(id);
            Serie serieSalvo = serieRepository.save(serieAtualizado);
            return ResponseEntity.ok(serieSalvo);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @CrossOrigin
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSerie(@PathVariable Long id) {
        Optional<Serie> optionalSerie = serieRepository.findById(id);
        if (optionalSerie.isPresent()) {
            serieRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
