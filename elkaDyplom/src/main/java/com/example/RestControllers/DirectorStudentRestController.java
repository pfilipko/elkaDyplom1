package com.example.RestControllers;

import com.example.Entities.Student;
import com.example.Repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by piotrek on 29.04.16.
 */

@RestController
@RequestMapping("/rest/director/student")
public class DirectorStudentRestController {

    @Autowired
    StudentRepository studentRepository;

    /**
     *
     * @return lista studentów kwalifikujących się do przydziału tematu
     */
    @RequestMapping(value = "/assign",method = RequestMethod.GET)
    public ResponseEntity<List<Student>> getStudentsForTopicAssignment(){
        List<Student> students = studentRepository.findAll();
        if(students.isEmpty()) {
            return new ResponseEntity<List<Student>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Student>>(students, HttpStatus.OK);
    }

}
