package com.example.RestControllers;

import com.example.Entities.Topic;
import com.example.Repositories.TopicRepository;
import org.springframework.beans.factory.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by piotrek on 03.04.16.
 */

@RestController
@RequestMapping("/rest/topic")
public class TopicRestController {

    @Autowired
    TopicRepository topicRepository;

    @RequestMapping(value = "/test",method = RequestMethod.GET)
    public ResponseEntity<List<Topic>> index(){
        List<Topic> topics = topicRepository.findAll();
        if(topics.isEmpty())
            return new ResponseEntity<List<Topic>>(HttpStatus.NO_CONTENT);

        return new ResponseEntity<List<Topic>>(topics,HttpStatus.OK);
    }

    @RequestMapping(value = "/",method = RequestMethod.GET)
    public ResponseEntity<Topic> getLoggedStudentInfo()
    {
        Topic topic = topicRepository.findById((long) 1);

        if(topic == null) {
            return new ResponseEntity<Topic>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<Topic>(topic,HttpStatus.OK);
    }

    @RequestMapping(value = "/",method = RequestMethod.POST)
    public ResponseEntity<Topic> create(@RequestBody(required = false) Topic topic) {
        if(topic==null)
            return new ResponseEntity<Topic>(HttpStatus.NOT_FOUND);
        topicRepository.save(topic);
        return new ResponseEntity<Topic>(topic,HttpStatus.OK);

    }

}
