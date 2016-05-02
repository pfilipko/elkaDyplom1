package com.example.RestControllers;

import com.example.Entities.StudiesType;
import com.example.Repositories.StudiesTypeRepository;
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
@RequestMapping("/rest/studiestypes")
public class StudiesTypesRestController {

    @Autowired
    StudiesTypeRepository studiesTypeRepository;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public ResponseEntity<List<StudiesType>> index() {
        List<StudiesType> studiesTypes = studiesTypeRepository.findAll();

        if(studiesTypes.isEmpty()) {
            return new ResponseEntity<List<StudiesType>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<StudiesType>>(studiesTypes,HttpStatus.OK);

    }
}
