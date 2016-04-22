package com.example.Entities;

import javax.persistence.*;

/**
 * Created by piotrek on 03.04.16.
 */

@Entity
@Table(name="topics")
public class Topic {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String title;

    private String details;

    private String tools;

    @ManyToOne(optional=true)
    @JoinColumn(name="supervisor_id",referencedColumnName="id" ,insertable = false, updatable = false)
    private Supervisor supervisor;

    /*@ManyToOne(optional=true)
    @JoinColumn(name="status_id",referencedColumnName="id" ,insertable = false, updatable = false)
    private Supervisor supervisor;*/

    public Topic() {
    }

    public String getDetails() {

        return details;
    }

    public String getTools() {
        return tools;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public Supervisor getSupervisor() {
        return supervisor;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public void setTools(String tools) {
        this.tools = tools;
    }

    public void setSupervisor(Supervisor supervisor) {
        this.supervisor = supervisor;
    }
}
