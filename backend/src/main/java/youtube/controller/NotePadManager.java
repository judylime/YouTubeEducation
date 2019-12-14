package youtube.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import youtube.model.NotePad;
import youtube.service.NotePadService;
import youtube.service.UserService;
import youtube.service.VideoService;

@Controller
@RequestMapping("/notepad")
public class NotePadManager {
	@Autowired
	UserService userService;
	
	@Autowired
	VideoService videoService;
	
	@Autowired
	NotePadService notePadService;
	
	@ResponseBody
	@RequestMapping(value = "/edit", method = RequestMethod.GET)
	public ResponseEntity<Boolean> editNote(@RequestParam("uid") String uid, @RequestParam("vid") String vid, String text) {;
		NotePad notePad = notePadService.getNotePad(uid, vid);
		notePad.setText(text);		
		
		notePadService.editNotePad(notePad.getId(), text);
		
		return new ResponseEntity<Boolean>(true, HttpStatus.OK);
	}
	
	@ResponseBody
	@RequestMapping(value = "/getContent", method = RequestMethod.GET)
	public String getContent(@RequestParam("uid") String uid, @RequestParam("vid") String vid) {
		NotePad notePad = notePadService.getNotePad(uid, vid);
		
		return notePad.getText();
	}
	
	
}
