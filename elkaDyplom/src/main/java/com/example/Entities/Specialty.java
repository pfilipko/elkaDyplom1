package com.example.Entities;

import javax.persistence.*;

/**
 * Created by piotrek on 23.04.16.
 */
@Entity
@Table(name="specialties")
public class Specialty {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    public Specialty() {
    }

    public Specialty(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }
}
