package youtube.dao;

import java.util.*;

import youtube.model.*;

public interface TagListDao {
	void addTagList(TagList tagList);
	List<Tag> getTags(String uid, String vid);
}
