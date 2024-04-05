package com.example.funwallAPI.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "serie")
public class Serie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    private String titulo;
    private String diretor;
    private String genero;
    private String elenco_princ;
    private String pais;
    private Date anoLancamento;
    private int num_temporadas;
    private int media;

    @Column(name = "imagem", columnDefinition = "BYTEA")
    private byte[] imagem;

    public Serie() {
    }

    public Serie(long id, String titulo, String diretor, String genero, String elenco_princ, String pais, Date anoLancamento, int num_temporadas, int media, byte[] imagem) {
        this.id = id;
        this.titulo = titulo;
        this.diretor = diretor;
        this.genero = genero;
        this.elenco_princ = elenco_princ;
        this.pais = pais;
        this.anoLancamento = anoLancamento;
        this.num_temporadas = num_temporadas;
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

    public String getDiretor() {
        return diretor;
    }

    public void setDiretor(String diretor) {
        this.diretor = diretor;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public String getElenco_princ() {
        return elenco_princ;
    }

    public void setElenco_princ(String elenco_princ) {
        this.elenco_princ = elenco_princ;
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

    public int getNum_temporadas() {
        return num_temporadas;
    }

    public void setNum_temporadas(int num_temporadas) {
        this.num_temporadas = num_temporadas;
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
