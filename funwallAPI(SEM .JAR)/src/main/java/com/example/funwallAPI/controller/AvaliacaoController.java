package com.example.funwallAPI.controller;

import com.example.funwallAPI.model.Avaliacao;
import com.example.funwallAPI.repository.AvaliacaoRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

@RestController
@RequestMapping("/avaliacoes")
public class AvaliacaoController {

    private final AvaliacaoRepository avaliacaoRepository;
    Avaliacao avaliacao = new Avaliacao();


    public AvaliacaoController(AvaliacaoRepository avaliacaoRepository) {
        this.avaliacaoRepository = avaliacaoRepository;
    }
    @CrossOrigin
    @GetMapping
    public ResponseEntity getAllAvaliacaos() {
        return ResponseEntity.ok(this.avaliacaoRepository.findAll());
    }

    @CrossOrigin
    @PostMapping
    public ResponseEntity addAvaliacao(@RequestBody Avaliacao avaliacao) {
        avaliacaoRepository.save(avaliacao);
        return ResponseEntity.ok().build();
    }
    @CrossOrigin
    @PutMapping("/{id}")
    public ResponseEntity<Avaliacao> putAvaliacao(@PathVariable Long id, @RequestBody Avaliacao avaliacaoAtualizado) {
        Optional<Avaliacao> optionalAvaliacao = avaliacaoRepository.findById(id);
        if (optionalAvaliacao.isPresent()) {
            avaliacaoAtualizado.setId(id);
            Avaliacao avaliacaoSalvo = avaliacaoRepository.save(avaliacaoAtualizado);
            return ResponseEntity.ok(avaliacaoSalvo);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @CrossOrigin
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAvaliacao(@PathVariable Long id) {
        Optional<Avaliacao> optionalAvaliacao = avaliacaoRepository.findById(id);
        if (optionalAvaliacao.isPresent()) {
            avaliacaoRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
