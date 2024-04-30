package com.example.funwallAPI.repository;


import com.example.funwallAPI.model.Avaliacao;
import com.example.funwallAPI.model.Serie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AvaliacaoRepository extends JpaRepository<Avaliacao, Long> {
}
