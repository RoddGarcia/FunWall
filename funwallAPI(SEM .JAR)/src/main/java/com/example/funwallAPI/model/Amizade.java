package com.example.funwallAPI.model;

import jakarta.persistence.*;

@Entity
@Table(name = "amizade")
public class Amizade {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @ManyToOne
    @JoinColumn(name = "user1_id")
    private Usuario user1_id;

    @ManyToOne
    @JoinColumn(name = "user2_id")
    private Usuario user2_id;


    public Amizade() {
    }

    public Amizade(long id, Usuario user1_id, Usuario user2_id) {
        this.id = id;
        this.user1_id = user1_id;
        this.user2_id = user2_id;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Usuario getUser1_id() {
        return user1_id;
    }

    public void setUser1_id(Usuario user1_id) {
        this.user1_id = user1_id;
    }

    public Usuario getUser2_id() {
        return user2_id;
    }

    public void setUser2_id(Usuario user2_id) {
        this.user2_id = user2_id;
    }
}
