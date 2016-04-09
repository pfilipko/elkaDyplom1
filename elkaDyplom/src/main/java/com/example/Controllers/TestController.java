package com.example.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by Piter on 05.03.2016.
 */
@Controller
@RequestMapping("/")
public class TestController {

    @RequestMapping("")
    public ModelAndView index(ModelAndView mav)
    {
        mav.setViewName("index");
        return mav;
    }

    @RequestMapping("#/supervisor/topic/add")
    public String getAddTopicTemplate() {
        return "templates/plain.html";
    }
}
