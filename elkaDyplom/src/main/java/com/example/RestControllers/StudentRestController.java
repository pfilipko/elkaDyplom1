package com.example.RestControllers;

import com.example.Entities.Student;
import com.example.Entities.Topic;
import com.example.Repositories.StudentRepository;
import com.example.Repositories.TopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by piotrek on 16.04.16.
 */


@RestController
@RequestMapping(path="/rest/student")
public class StudentRestController {

    @Autowired
    StudentRepository studentRepository;
    @Autowired
    TopicRepository topicRepository;

    @RequestMapping(path="/", method = RequestMethod.GET)
    public ResponseEntity<Topic> index() {
        Student student = studentRepository.findById((long) 1);
        Topic topic = student.getTopic();

        //Topic topic = topicRepository.findById((long) 5);
        return new ResponseEntity<Topic>(topic,HttpStatus.OK);
    }
}
