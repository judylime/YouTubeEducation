package youtube.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HelloController {
	
	String message = "Welcome to Spring MVC!";

	@RequestMapping("/hello")   
	// path variable with {username} in the url @PathVariable("username") String name
	// @PathVariabl Map<String, String> pathVars key- "username" value - input in url
	
	public ModelAndView showMessage(@RequestParam(value = "name", required = false, defaultValue = "World") String name) {
		
		System.out.println("in controller");

		ModelAndView mv = new ModelAndView("Hello");
		mv.addObject("message", message);
		mv.addObject("name", name);
		return mv;
	}
}
