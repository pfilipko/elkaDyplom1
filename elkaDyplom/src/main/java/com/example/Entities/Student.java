package com.example.Entities;

import javax.persistence.*;

@Entity
@Table(name="students")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    private String lastname;

    private String mail;

    private String average;

    private int topic_id;

    @ManyToOne(optional=true)
    @JoinColumn(name="topic_id",referencedColumnName="id" ,insertable = false, updatable = false)
    private Topic topic;

    public Student() {
    }

    public Student(String name, String lastname) {
        this.name = name;
        this.lastname = lastname;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getLastname() {
        return lastname;
    }

    public String getMail() {
        return mail;
    }

    public String getAverage() {
        return average;
    }

    public int getTopic_id() {
        return topic_id;
    }

    public Topic getTopic() {
        return topic;
    }


    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public void setAverage(String average) {
        this.average = average;
    }

    public void setTopic_id(int topic_id) {
        this.topic_id = topic_id;
    }

    public void setTopic(Topic topic) {
        this.topic = topic;
    }

}
