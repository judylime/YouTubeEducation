package youtube.controller;

import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import youtube.model.Tag;
import youtube.model.TagList;
import youtube.model.User;
import youtube.model.Video;
import youtube.service.TagListService;
import youtube.service.TagService;
import youtube.service.UserService;
import youtube.service.VideoService;


@Controller
@RequestMapping(value = "/tag")
public class TagManagerController {

	@Autowired
	private UserService userService;

	@Autowired
	private VideoService videoService;

	@Autowired
	private TagService tagService;
	
	@Autowired
	private TagListService tagListService;
	
	@ResponseBody
	@RequestMapping(value = "/getTags", method = RequestMethod.GET)
	public List<String> getTags(@RequestParam("uid") String uid, @RequestParam("vid") String vid) {
		List<String> tagNames = new ArrayList<>();
		for (Tag tag : tagListService.getTags(uid, vid)) {
			tagNames.add(tag.getName());
		}
		return tagNames;
	}
	

	@ResponseBody
	@RequestMapping(value = "/add", method = RequestMethod.GET)
	public ResponseEntity<Boolean> addTag(@RequestParam("uid") String uid, @RequestParam("vid") String vid, Tag tag) {
		// save or update tag one by one
		User user = userService.getUser(uid);
		Video video = videoService.getVideoById(vid, uid);
		tagService.addTag(tag);
		TagList tagList = new TagList();
		tagList.setUser(user);
		tagList.setVideo(video);
		tagList.setTag(tag);
		user.setTagLists(new HashSet<TagList>());
		video.setTagLists(new HashSet<TagList>());
		tag.setTagLists(new HashSet<TagList>());
		user.getTagLists().add(tagList);
		video.getTagLists().add(tagList);
		tag.getTagLists().add(tagList);
		tagListService.addTagList(tagList);
		
		return new ResponseEntity<Boolean>(true, HttpStatus.OK);
	}
	
	@ResponseBody
	@RequestMapping(value = "/delete", method = RequestMethod.DELETE)
	public ResponseEntity<Boolean> deleteTag(@PathVariable("name") String tagName) {

		// delete tag from database

		return new ResponseEntity<Boolean>(true, HttpStatus.OK);
	}

}
