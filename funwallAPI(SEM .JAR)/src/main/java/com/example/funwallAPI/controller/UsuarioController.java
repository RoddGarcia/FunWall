package com.example.funwallAPI.controller;

import com.example.funwallAPI.model.Usuario;
import com.example.funwallAPI.repository.UsuarioRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    private final UsuarioRepository usuarioRepository;

    public UsuarioController(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @CrossOrigin
    @GetMapping
    public ResponseEntity getAllUsuarios() {
        return ResponseEntity.ok(this.usuarioRepository.findAll());
    }

    @CrossOrigin
    @GetMapping("/buscar")
    public ResponseEntity<?> buscarUsuarioPorNome(@RequestParam("nome") String nome) {
        List<Usuario> usuariosEncontrados = usuarioRepository.findByNome(nome);
        if (usuariosEncontrados.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(usuariosEncontrados);
        }
    }
    @CrossOrigin
    @PostMapping
    public ResponseEntity addUsuario(@RequestBody Usuario usuario) {
        usuarioRepository.save(usuario);
        return ResponseEntity.ok().build();
    }

    @CrossOrigin
    @PostMapping("/add-com-imagem")
    public ResponseEntity addUsuarioComImagem(@RequestParam("usuario") Usuario usuario,
                                            @RequestParam("imagem") MultipartFile imagem) {
        try {
            usuario.setImagem(imagem.getBytes());
            usuarioRepository.save(usuario);
            return ResponseEntity.ok().build();
        } catch (IOException e) {
            // Trate qualquer exceção de IO, se necessário
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
    @CrossOrigin
    @PutMapping("/{id}")
    public ResponseEntity<Usuario> putUsuario(@PathVariable Long id, @RequestBody Usuario usuarioAtualizado) {
        Optional<Usuario> optionalUsuario = usuarioRepository.findById(id);
        if (optionalUsuario.isPresent()) {
            usuarioAtualizado.setId(id);
            Usuario usuarioSalvo = usuarioRepository.save(usuarioAtualizado);
            return ResponseEntity.ok(usuarioSalvo);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @CrossOrigin
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUsuario(@PathVariable Long id) {
        Optional<Usuario> optionalUsuario = usuarioRepository.findById(id);
        if (optionalUsuario.isPresent()) {
            usuarioRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
