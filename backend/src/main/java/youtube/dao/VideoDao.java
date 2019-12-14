package youtube.dao;

import youtube.model.User;
import youtube.model.Video;
import java.util.*;

public interface VideoDao {
	void addVideo(Video video);

	Video getVideoById(String id, String name);
	
	List<Video> getVideoByTitle(String title, String name);
	
	List<Video> getVideoAll(User user);
	
	//void removeVideo(int VideoId);
}
