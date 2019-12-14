package youtube.service;

import java.util.*;

import youtube.model.Tag;
import youtube.model.TagList;

public interface TagListService {
	void addTagList(TagList tagList);
	List<Tag> getTags(String uid, String vid);
}
