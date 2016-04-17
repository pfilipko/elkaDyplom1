package com.example.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by Piter on 05.03.2016.
 */
@Controller
/*@RequestMapping("/")*/
public class TestController {

    @RequestMapping("/")
    public ModelAndView index(ModelAndView mav)
    {
        mav.setViewName("index");
        return mav;
    }

    @RequestMapping("/supervisor/**")
    public String supervisorContext() {
        return "index";
    }

    @RequestMapping("/supervisor/topic/add")
    public String supervisorTopicAdd() {
        return "plain";
    }

    @RequestMapping("/supervisor/topic/edit")
    public String supervisorTopicEdit() {
        return "plain";
    }

    @RequestMapping("/supervisor/topic/clone")
    public String supervisorTopicClone() {
        return "plain";
    }

    @RequestMapping("/director/topic/add")
    public String directorTopicAdd() {
        return "plain";
    }

    @RequestMapping("/director/topic/edit")
    public String directorTopicEdit() {
        return "plain";
    }

    @RequestMapping("/director/**")
    public String directorContext() {
        return "index";
    }

    @RequestMapping("/manager/**")
    public String managerContext() {
        return "index";
    }

    @RequestMapping("/test/**")
    public String testContext() {
        return "index";
    }

    @RequestMapping("/ranking/**")
    public String rankingContext() {
        return "index";
    }


   /* @RequestMapping("#/supervisor/topic/add")
    public String getAddTopicTemplate() {
        return "templates/plain.html";
    }*/
}
