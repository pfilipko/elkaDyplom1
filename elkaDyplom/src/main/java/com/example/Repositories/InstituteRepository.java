package com.example.Repositories;

import com.example.Entities.Institute;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * Created by piotrek on 24.04.16.
 */
@RepositoryRestResource
public interface InstituteRepository extends JpaRepository<Institute, Long> {

    public Institute findById(Long id);
}
