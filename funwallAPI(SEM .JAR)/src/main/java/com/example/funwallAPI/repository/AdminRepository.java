package com.example.funwallAPI.repository;


import com.example.funwallAPI.model.Admin;
import com.example.funwallAPI.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Long> {

    List<Admin> findByNome(String nome);

}
