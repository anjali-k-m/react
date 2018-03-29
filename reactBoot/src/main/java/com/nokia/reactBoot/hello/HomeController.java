package com.nokia.reactBoot.hello;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class HomeController {

	@RequestMapping("/hello")	
	public String greet() {
		return "index.html";
	}
	
	@RequestMapping("/echo")
	public String echo(@RequestParam(value="request", defaultValue="Hi") String request) {
		return "Hello, " + request;
	}
}
