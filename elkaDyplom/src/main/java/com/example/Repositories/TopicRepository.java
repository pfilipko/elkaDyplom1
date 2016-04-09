package com.example.Repositories;

import com.example.Entities.Topic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * Created by piotrek on 03.04.16.
 */

@RepositoryRestResource
public interface TopicRepository extends JpaRepository<Topic, Long> {



}