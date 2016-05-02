package com.example.Repositories;

import com.example.Entities.StudiesType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * Created by piotrek on 29.04.16.
 */
@RepositoryRestResource
public interface StudiesTypeRepository extends JpaRepository<StudiesType, Long> {

    public StudiesType findById(Long id);
}
