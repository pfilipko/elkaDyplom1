package com.example.Entities;

import javax.persistence.*;

/**
 * Created by piotrek on 29.04.16.
 */
@Entity
@Table(name="studies_types")
public class StudiesType {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    public StudiesType() {
    }

    public StudiesType(String name) {

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
