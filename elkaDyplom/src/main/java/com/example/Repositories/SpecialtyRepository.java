package com.example.Repositories;

import com.example.Entities.Specialty;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * Created by piotrek on 24.04.16.
 */
@RepositoryRestResource
public interface SpecialtyRepository extends JpaRepository<Specialty, Long> {
    public Specialty findById(Long id);
}
