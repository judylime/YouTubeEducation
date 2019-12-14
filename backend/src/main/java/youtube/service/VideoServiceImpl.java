package youtube.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;
import youtube.dao.VideoDao;
import youtube.model.User;
import youtube.model.Video;

@Service
public class VideoServiceImpl implements VideoService {

	@Autowired
	private VideoDao videoDao;

	public void addVideo(Video v) {
		videoDao.addVideo(v);
	}

	public Video getVideoById(String id, String name) {

		return videoDao.getVideoById(id, name);
	}

	public List<Video> getVideoByTitle(String title, String name) {

		return videoDao.getVideoByTitle(title, name);
	}

	public List<Video> getVideoAll(User user) {

		return videoDao.getVideoAll(user);
	}
}
