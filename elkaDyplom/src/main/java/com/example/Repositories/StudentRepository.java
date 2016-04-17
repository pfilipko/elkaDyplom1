
package com.example.Repositories;

import com.example.Entities.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


/**
 * Created by piotrek on 16.04.16.
 */

@RepositoryRestResource(path="/student")
public interface StudentRepository extends JpaRepository<Student, Long> {

    public Student findById(Long id);
}

