package com.example.funwallAPI.controller;

import com.example.funwallAPI.model.Amizade;
import com.example.funwallAPI.repository.AmizadeRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

@RestController
@RequestMapping("/amizade")
public class AmizadeController {

    private final AmizadeRepository amizadeRepository;

    public AmizadeController(AmizadeRepository amizadeRepository) {
        this.amizadeRepository = amizadeRepository;
    }

    @CrossOrigin
    @GetMapping
    public ResponseEntity getAllAmizades() {
        return ResponseEntity.ok(this.amizadeRepository.findAll());
    }

    @CrossOrigin
    @PostMapping
    public ResponseEntity addAmizade(@RequestBody Amizade amizade) {
        amizadeRepository.save(amizade);
        return ResponseEntity.ok().build();
    }

}
