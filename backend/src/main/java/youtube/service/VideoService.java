package youtube.service;
import youtube.model.User;
import youtube.model.Video;
import java.util.*;

/*
 * Tag service interface to test tag add remove
 */
public interface VideoService {
    void addVideo(Video v);
    
    Video getVideoById(String id, String name);
    
    List<Video> getVideoByTitle(String title, String name);

    List<Video> getVideoAll(User user);
    //void removeTag(String tagName);

    //void removeAllTags(Tag tag);
}


