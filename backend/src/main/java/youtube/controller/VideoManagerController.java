package youtube.controller;

import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import youtube.model.User;
import youtube.model.Video;
import youtube.service.UserService;
import youtube.service.VideoService;

@Controller
@RequestMapping("/video")
public class VideoManagerController {
	
	@Autowired
	private VideoService videoService;
	
	@Autowired
	private UserService userService;
	
	@ResponseBody
	@RequestMapping(value = "/display", method = RequestMethod.GET)
	public List<Video> getVedioAll(@RequestParam("name") String name) {
		// search video in the db
		List<Video> videoList = new ArrayList<>();
		User user = userService.getUser(name);
		videoList = videoService.getVideoAll(user);
		return videoList;
	}
	
	@ResponseBody
	@RequestMapping(value = "/searchId", method = RequestMethod.GET)
	public Video getVedioById(@RequestParam("name") String name, @RequestParam("id") String id) {
		// search video in the db
		Video v = videoService.getVideoById(id, name);
		return v;
	}
	
	@ResponseBody
	@RequestMapping(value = "/searchTitle", method = RequestMethod.GET)
	public List<Video> getVedioByTitle(@RequestParam("name") String name, @RequestParam("title") String title) {
		// search video in the db
		return videoService.getVideoByTitle(title, name);
	}
	
	
	@ResponseBody
	@RequestMapping(value = "/delete", method = RequestMethod.DELETE)   
	public ResponseEntity<Boolean> deleteVideo(@RequestParam("id") String id) {
		// delete video from database 
		
		return new ResponseEntity<Boolean>(true, HttpStatus.OK);
		
	}
}
