package com.example.Repositories;

import com.example.Entities.Supervisor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * Created by piotrek on 29.04.16.
 */
@RepositoryRestResource
public interface SupervisorRepository extends JpaRepository<Supervisor, Long> {

    public Supervisor findById(Long id);
}
