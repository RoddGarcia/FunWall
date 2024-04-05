package com.example.funwallAPI.repository;


import com.example.funwallAPI.model.Amizade;
import com.example.funwallAPI.model.Avaliacao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AmizadeRepository extends JpaRepository<Amizade, Long> {
}
