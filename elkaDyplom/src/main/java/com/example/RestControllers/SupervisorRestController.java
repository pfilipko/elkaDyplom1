package com.example.RestControllers;

import com.example.Entities.Supervisor;
import com.example.Repositories.SupervisorRepository;
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
@RequestMapping("/rest/supervisor")
public class SupervisorRestController {

    @Autowired
    SupervisorRepository supervisorRepository;

    /**
     * @return zbiór wszystkich promotorów
     */
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public ResponseEntity<List<Supervisor>> index(){
        List<Supervisor> supervisors = supervisorRepository.findAll();
        if(supervisors.isEmpty())
            return new ResponseEntity<List<Supervisor>>(HttpStatus.NO_CONTENT);

        return new ResponseEntity<List<Supervisor>>(supervisors,HttpStatus.OK);
    }


}
