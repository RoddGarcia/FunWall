package com.example.funwallAPI.repository;


import java.util.List;

import com.example.funwallAPI.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    List<Usuario> findByNome(String nome);

}
