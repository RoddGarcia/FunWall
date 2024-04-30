package com.example.funwallAPI.model;

import jakarta.persistence.*;

@Entity
@Table(name = "comentario")
public class Comentario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    private String texto;
    private int numero_likes;


    @ManyToOne
    @JoinColumn(name = "user_id")
    private Usuario user_id;


    @ManyToOne
    @JoinColumn(name = "aval_id")
    private Avaliacao aval_id;

    public Comentario() {
    }


    public Comentario(long id, String texto, Usuario user_id, int numero_likes, Avaliacao aval_id) {
        this.id = id;
        this.texto = texto;
        this.user_id = user_id;
        this.numero_likes = numero_likes;
        this.aval_id = aval_id;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTexto() {
        return texto;
    }

    public void setTexto(String texto) {
        this.texto = texto;
    }

    public Usuario getUser_id() {
        return user_id;
    }

    public void setUser_id(Usuario user_id) {
        this.user_id = user_id;
    }

    public int getNumero_likes() {
        return numero_likes;
    }

    public void setNumero_likes(int numero_likes) {
        this.numero_likes = numero_likes;
    }

    public Avaliacao getAval_id() {
        return aval_id;
    }

    public void setAval_id(Avaliacao aval_id) {
        this.aval_id = aval_id;
    }
}
