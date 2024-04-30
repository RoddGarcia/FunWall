package com.example.funwallAPI.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "avaliacao")
public class Avaliacao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    private String obra;
    private int nota;
    private String texto;
    private int numero_likes;


    @ManyToOne
    @JoinColumn(name = "user_id")
    private Usuario user_id;


    public Avaliacao() {
    }

    public Avaliacao(long id, String obra, int nota, String texto, int numero_likes, Usuario user_id) {
        this.id = id;
        this.obra = obra;
        this.nota = nota;
        this.texto = texto;
        this.numero_likes = numero_likes;
        this.user_id = user_id;
    }


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getObra() {
        return obra;
    }

    public void setObra(String obra) {
        this.obra = obra;
    }

    public int getNota() {
        return nota;
    }

    public void setNota(int nota) {
        this.nota = nota;
    }

    public String getTexto() {
        return texto;
    }

    public void setTexto(String texto) {
        this.texto = texto;
    }

    public int getNumero_likes() {
        return numero_likes;
    }

    public void setNumero_likes(int numero_likes) {
        this.numero_likes = numero_likes;
    }

    public Usuario getUser_id() {
        return user_id;
    }

    public void setUser_id(Usuario user_id) {
        this.user_id = user_id;
    }
}
