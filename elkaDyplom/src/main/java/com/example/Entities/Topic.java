package com.example.Entities;

import javax.persistence.*;
import java.util.Date;

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

    private String tags;

    private Long maxStudents;

    private Boolean privateTopic;

    private Boolean english;

    private Long supervisorId;

    private Long popularity;

    @ManyToOne(optional=true)
    @JoinColumn(name="supervisorId",referencedColumnName="id" ,insertable = false, updatable = false)
    private Supervisor supervisor;

    private Long statusId;

    @ManyToOne(optional=true)
    @JoinColumn(name="statusId",referencedColumnName="id" ,insertable = false, updatable = false)
    private Status status;

    private Long specialtyId;

    @ManyToOne(optional=true)
    @JoinColumn(name="specialtyId",referencedColumnName="id" ,insertable = false, updatable = false)
    private Specialty specialty;

    private Long instituteId;

    @ManyToOne(optional=true)
    @JoinColumn(name="instituteId",referencedColumnName="id" ,insertable = false, updatable = false)
    private Institute institute;

    private Long studiesTypeId;

    @ManyToOne(optional = true)
    @JoinColumn(name="studiesTypeId", referencedColumnName = "id", insertable = false, updatable = false)
    private StudiesType studiesType;

    @Temporal(TemporalType.DATE)
    private Date creationDate;

    public Status getStatus() {
        return status;
    }

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

    public Specialty getSpecialty() {
        return specialty;
    }

    public Institute getInstitute() {
        return institute;
    }

    public Long getMaxStudents() {
        return maxStudents;
    }

    public Boolean isPrivateTopic() {
        return privateTopic;
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public String getTags() {
        return tags;
    }

    public Boolean getPrivateTopic() {
        return privateTopic;
    }

    public Boolean getEnglish() {
        return english;
    }

    public Long getSupervisorId() {
        return supervisorId;
    }

    public Long getStatusId() {
        return statusId;
    }

    public Long getSpecialtyId() {
        return specialtyId;
    }

    public Long getInstituteId() {
        return instituteId;
    }

    public Long getStudiesTypeId() {
        return studiesTypeId;
    }

    public StudiesType getStudiesType() {
        return studiesType;
    }

    public Long getPopularity() {
        return popularity;
    }

    public Boolean isEnglish() {
        return english;
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

    public void setSpecialty(Specialty specialty) {
        this.specialty = specialty;
    }

    public void setInstitute(Institute institute) {
        this.institute = institute;
    }

    public void setPrivateTopic(Boolean privateTopic) {
        this.privateTopic = privateTopic;
    }

    public void setEnglish(Boolean english) {
        this.english = english;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }

    public void setTags(String tags) {
        this.tags = tags;
    }

    public void setSupervisorId(Long supervisorId) {
        this.supervisorId = supervisorId;
    }

    public void setStatusId(Long statusId) {
        this.statusId = statusId;
    }

    public void setSpecialtyId(Long specialtyId) {
        this.specialtyId = specialtyId;
    }

    public void setInstituteId(Long instituteId) {
        this.instituteId = instituteId;
    }

    public void setMaxStudents(Long maxStudents) {
        this.maxStudents = maxStudents;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public void setStudiesTypeId(Long studiesTypeId) {
        this.studiesTypeId = studiesTypeId;
    }

    public void setStudiesType(StudiesType studiesType) {
        this.studiesType = studiesType;
    }

    public void setPopularity(Long popularity) {
        this.popularity = popularity;
    }
}

