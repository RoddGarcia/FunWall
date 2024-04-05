package com.example.funwallAPI.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "livro")
public class Livro {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    private String titulo;
    private String autor;
    private String genero;
    private String editora;
    private String pais;
    private Date anoLancamento;
    private int media;

    @Column(name = "imagem", columnDefinition = "BYTEA")
    private byte[] imagem;

    public Livro() {
    }

    public Livro(long id, String titulo, String autor, String genero, String editora, String pais, Date anoLancamento, int media, byte[] imagem) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.editora = editora;
        this.pais = pais;
        this.anoLancamento = anoLancamento;
        this.media = media;
        this.imagem = imagem;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public String getEditora() {
        return editora;
    }

    public void setEditora(String editora) {
        this.editora = editora;
    }

    public String getPais() {
        return pais;
    }

    public void setPais(String pais) {
        this.pais = pais;
    }

    public Date getAnoLancamento() {
        return anoLancamento;
    }

    public void setAnoLancamento(Date anoLancamento) {
        this.anoLancamento = anoLancamento;
    }

    public int getMedia() {
        return media;
    }

    public void setMedia(int media) {
        this.media = media;
    }

    public byte[] getImagem() {
        return imagem;
    }

    public void setImagem(byte[] imagem) {
        this.imagem = imagem;
    }
}
