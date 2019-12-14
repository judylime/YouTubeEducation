package youtube.service;

import youtube.model.User;

public interface UserService {
	void addUser(User user);
	User getUser(String name);
}
