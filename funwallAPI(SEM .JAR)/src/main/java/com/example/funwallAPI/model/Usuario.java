package com.example.funwallAPI.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "usuario")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    private String nome;
    private String senha;
    private Date nascimento;
    private String cidade;
    private String estado;
    private String interesse;


    @Column(name = "imagem", columnDefinition = "BYTEA")
    private byte[] imagem;

    public Usuario() {
    }

    public Usuario(long id, String nome, String senha, Date nascimento, String cidade, String estado, String interesse, byte[] imagem) {
        this.id = id;
        this.nome = nome;
        this.senha = senha;
        this.nascimento = nascimento;
        this.cidade = cidade;
        this.estado = estado;
        this.interesse = interesse;
        this.imagem = imagem;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public Date getNascimento() {
        return nascimento;
    }

    public void setNascimento(Date nascimento) {
        this.nascimento = nascimento;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getInteresse() {
        return interesse;
    }

    public void setInteresse(String interesse) {
        this.interesse = interesse;
    }

    public byte[] getImagem() {
        return imagem;
    }

    public void setImagem(byte[] imagem) {
        this.imagem = imagem;
    }
}
