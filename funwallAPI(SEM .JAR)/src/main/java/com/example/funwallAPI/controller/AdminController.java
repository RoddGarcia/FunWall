package com.example.funwallAPI.controller;

import com.example.funwallAPI.model.Admin;
import com.example.funwallAPI.repository.AdminRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/admin")
public class AdminController {

    private final AdminRepository adminRepository;

    public AdminController(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }
    @CrossOrigin
    @GetMapping
    public ResponseEntity getAllAdmins() {
        return ResponseEntity.ok(this.adminRepository.findAll());
    }

    @CrossOrigin
    @GetMapping("/buscar")
    public ResponseEntity<?> buscarAdminPorNome(@RequestParam("nome") String nome) {
        List<Admin> adminsEncontrados = adminRepository.findByNome(nome);
        if (adminsEncontrados.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(adminsEncontrados);
        }
    }
    @CrossOrigin
    @PostMapping
    public ResponseEntity addAdmin(@RequestBody Admin admin) {
        adminRepository.save(admin);
        return ResponseEntity.ok().build();
    }

    @CrossOrigin
    @PutMapping("/{id}")
    public ResponseEntity<Admin> putAdmin(@PathVariable Long id, @RequestBody Admin adminAtualizado) {
        Optional<Admin> optionalAdmin = adminRepository.findById(id);
        if (optionalAdmin.isPresent()) {
            adminAtualizado.setId(id);
            Admin adminSalvo = adminRepository.save(adminAtualizado);
            return ResponseEntity.ok(adminSalvo);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @CrossOrigin
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAdmin(@PathVariable Long id) {
        Optional<Admin> optionalAdmin = adminRepository.findById(id);
        if (optionalAdmin.isPresent()) {
            adminRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
