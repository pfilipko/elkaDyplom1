package com.example.RestControllers;

import com.example.Entities.Institute;
import com.example.Repositories.InstituteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by piotrek on 24.04.16.
 */
@RestController
@RequestMapping("/rest/institute")
public class InstituteRestController {

    @Autowired
    InstituteRepository instituteRepository;

    @RequestMapping(value = "/",method = RequestMethod.GET)
    public ResponseEntity<List<Institute>> index(){
        List<Institute> institutes = instituteRepository.findAll();
        if(institutes.isEmpty())
            return new ResponseEntity<List<Institute>>(HttpStatus.NO_CONTENT);

        return new ResponseEntity<List<Institute>>(institutes,HttpStatus.OK);

    }
}
