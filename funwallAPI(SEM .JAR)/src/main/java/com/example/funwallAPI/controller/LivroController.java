package com.example.funwallAPI.controller;

import com.example.funwallAPI.model.Filme;
import com.example.funwallAPI.model.Livro;
import com.example.funwallAPI.repository.LivroRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

@RestController
@RequestMapping("/livros")
public class LivroController {

    private final LivroRepository livroRepository;

    public LivroController(LivroRepository livroRepository) {
        this.livroRepository = livroRepository;
    }

    @CrossOrigin
    @GetMapping
    public ResponseEntity getAllLivros() {
        return ResponseEntity.ok(this.livroRepository.findAll());
    }

    @CrossOrigin
    @PostMapping
    public ResponseEntity addLivro(@RequestBody Livro livro) {
        livroRepository.save(livro);
        return ResponseEntity.ok().build();
    }

    @CrossOrigin
    @PostMapping("/add-com-imagem")
    public ResponseEntity addLivroComImagem(@RequestParam("livro") Livro livro,
                                            @RequestParam("imagem") MultipartFile imagem) {
        try {
            livro.setImagem(imagem.getBytes());
            livroRepository.save(livro);
            return ResponseEntity.ok().build();
        } catch (IOException e) {
            // Trate qualquer exceção de IO, se necessário
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
    @CrossOrigin
    @PutMapping("/{id}")
    public ResponseEntity<Livro> putFilme(@PathVariable Long id, @RequestBody Livro livroAtualizado) {
        Optional<Livro> optionalLivro = livroRepository.findById(id);
        if (optionalLivro.isPresent()) {
            livroAtualizado.setId(id);
            Livro livroSalvo = livroRepository.save(livroAtualizado);
            return ResponseEntity.ok(livroSalvo);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @CrossOrigin
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLivro(@PathVariable Long id) {
        Optional<Livro> optionalLivro = livroRepository.findById(id);
        if (optionalLivro.isPresent()) {
            livroRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
