package youtube.dao;

import youtube.model.User;

public interface UserDao {
	void addUser(User user);
	User getUser(String email);
}