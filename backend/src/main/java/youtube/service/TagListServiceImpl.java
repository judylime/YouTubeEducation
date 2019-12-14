package youtube.service;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import youtube.dao.TagListDao;
import youtube.model.Tag;
import youtube.model.TagList;

@Service
public class TagListServiceImpl implements TagListService{

	@Autowired
	private TagListDao tagListDao;
	
	public void addTagList(TagList tagList) {
		tagListDao.addTagList(tagList);
	}

	@Override
	public List<Tag> getTags(String uid, String vid) {
		return tagListDao.getTags(uid, vid);
	}
	
}
