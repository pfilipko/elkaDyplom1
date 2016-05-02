package com.example.RestControllers;

import com.example.Entities.Topic;
import com.example.Repositories.TopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;

/**
 * Created by piotrek on 29.04.16.
 */

@RestController
@RequestMapping("/rest/supervisor/topic")
public class SupervisorTopicRestController {

    @Autowired
    TopicRepository topicRepository;

    @RequestMapping(value = "/",method = RequestMethod.GET)
    public ResponseEntity<List<Topic>> index() {
        List<Topic> topics = topicRepository.findAll();
        if(topics.isEmpty()) {
            return new ResponseEntity<List<Topic>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Topic>>(topics,HttpStatus.OK);
    }

    @RequestMapping(path="/add", method = RequestMethod.POST)
    public ResponseEntity<Topic> create(@RequestBody Topic topic) {
        if(topic == null) {
            return new ResponseEntity<Topic>(HttpStatus.NOT_FOUND);
        }
        topic.setCreationDate(new Date());
        topicRepository.save(topic);
        return new ResponseEntity<Topic>(topic,HttpStatus.OK);
    }
}
