package com.example.RestControllers;

import com.example.Entities.Specialty;
import com.example.Repositories.SpecialtyRepository;
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
@RequestMapping("/rest/specialty")
public class SpecialtyRestController {

    @Autowired
    SpecialtyRepository specialtyRepository;

    @RequestMapping(value = "/",method = RequestMethod.GET)
    public ResponseEntity<List<Specialty>> index(){
        List<Specialty> specialties = specialtyRepository.findAll();
        if(specialties.isEmpty())
            return new ResponseEntity<List<Specialty>>(HttpStatus.NO_CONTENT);

        return new ResponseEntity<List<Specialty>>(specialties,HttpStatus.OK);

    }
}
