package com.example.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by Piter on 05.03.2016.
 */
@Controller
public class TestController {

    @RequestMapping({
            "/",
            "/student/{urlName:(?:topic)?}",
            "/supervisor/{urlName:(?:topic|student)?}",
            "/supervisor/topic/{urlName:(?:students)?}",
            "/director/{urlName:(?:topic|student|user)?}",
            "/manager/{urlName:(?:topic|student)?}",
            "/ranking"
    })
    public String index() {
        return "forward:/index.html";
    }

    @RequestMapping({
            "/supervisor/topic/{urlName:(?:add|clone|edit)}",
            "/director/topic/{urlName:(?:add|clone|edit)}"
    })
    public String plain() {
        return "forward:/plain.html";
    }

   /* @RequestMapping("#/supervisor/topic/add")
    public String getAddTopicTemplate() {
        return "templates/plain.html";
    }*/
}
