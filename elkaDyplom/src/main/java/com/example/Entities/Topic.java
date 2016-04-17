package com.example.Entities;

import javax.persistence.*;

/**
 * Created by piotrek on 03.04.16.
 */

@Entity
@Table(name="topic")
public class Topic {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String title;

    private String details;

    private String tools;

    public void setDetails(String details) {
        this.details = details;
    }

    public void setTools(String tools) {
        this.tools = tools;
    }

    public String getDetails() {

        return details;
    }

    public String getTools() {
        return tools;
    }

    public Topic() {
    }

    public Topic(String title) {
        this.title = title;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }
}
