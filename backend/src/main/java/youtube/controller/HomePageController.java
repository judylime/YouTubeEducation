package youtube.controller;

import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import youtube.model.NotePad;
import youtube.model.User;
import youtube.model.Video;
import youtube.service.UserService;

@Controller
public class HomePageController {
	
	@Autowired
	private UserService userService;
	
	@ResponseBody
	@RequestMapping(value = "/register", method = RequestMethod.POST)   
	// path variable with {username} in the url @PathVariable("username") String name
	// @PathVariabl Map<String, String> pathVars key- "username" value - input in url
	
	public ResponseEntity<Boolean> register(@RequestParam("name") String name, @RequestParam("pwd") String pwd) {
		User user = new User();
		user.setName(name);
		user.setPassword(pwd);
		user.setVideoList(new ArrayList<Video>());
		user.setNotePadList(new HashSet<NotePad>());
		userService.addUser(user);
		return new ResponseEntity<Boolean>(true, HttpStatus.OK); 
	}
	
	@ResponseBody
	@RequestMapping(value = "/login", method = RequestMethod.GET)   
	public ResponseEntity<Boolean> login(@RequestParam("name") String name, @RequestParam("pwd") String pwd) {

		// check if the user if our user and password is correct
		User user = userService.getUser(name);
		if (user.getPassword().equals(pwd)) {
			return new ResponseEntity<Boolean>(true, HttpStatus.OK);
		} else {
			return new ResponseEntity<Boolean>(false, HttpStatus.OK);
		}		
		
	}
}
