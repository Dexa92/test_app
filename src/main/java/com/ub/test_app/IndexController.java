package com.ub.test_app;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class IndexController {

    @RequestMapping(value = IndexRoutes.ROOT, method = RequestMethod.GET)
    public String index(){

        return "com.ub.test_app.index";

    }

}
