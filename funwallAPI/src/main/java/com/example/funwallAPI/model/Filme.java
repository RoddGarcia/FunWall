package com.example.funwallAPI.model;

import java.util.Date;

import jakarta.persistence.*;

@Entity
public class Filme {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    private String titulo;
    private String diretor;
    private String elenco;
    private String pais;
    private Date anoLancamento;
    private int media;

    public Filme() {
    }

    public Filme(long id, String titulo, String diretor, String elenco, String pais, Date anoLancamento, int media) {
        this.id = id;
        this.titulo = titulo;
        this.diretor = diretor;
        this.elenco = elenco;
        this.pais = pais;
        this.anoLancamento = anoLancamento;
        this.media = media;
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

    public String getDiretor() {
        return diretor;
    }

    public void setDiretor(String diretor) {
        this.diretor = diretor;
    }

    public String getElenco() {
        return elenco;
    }

    public void setElenco(String elenco) {
        this.elenco = elenco;
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
}
