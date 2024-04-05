package com.example.funwallAPI.repository;


import com.example.funwallAPI.model.Avaliacao;
import com.example.funwallAPI.model.Comentario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ComentarioRepository extends JpaRepository<Comentario, Long> {
}
