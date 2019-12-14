package youtube.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import youtube.dao.UserDao;
import youtube.model.User;

@Service
public class UserServiceImpl implements UserService{
	@Autowired
	private UserDao userDao;

	public void addUser(User user) {
		userDao.addUser(user);
	}
	
	public User getUser(String name) {
		return userDao.getUser(name);
	}
}
