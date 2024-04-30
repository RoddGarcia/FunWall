package com.example.funwallAPI.repository;


import com.example.funwallAPI.model.Filme;
import com.example.funwallAPI.model.Livro;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LivroRepository extends JpaRepository<Livro, Long> {
}
