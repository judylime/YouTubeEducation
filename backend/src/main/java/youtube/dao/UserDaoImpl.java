package youtube.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import youtube.model.User;

@Repository
public class UserDaoImpl implements UserDao{

	@Autowired
	private SessionFactory sessionFactory;
	
	public void addUser(User user) {
		Session session = null;
		try {
			session = sessionFactory.openSession();
			session.beginTransaction();
			session.saveOrUpdate(user);
			session.getTransaction().commit();
		} catch (Exception e) {
			e.printStackTrace();
			session.getTransaction().rollback();
		} finally {
			if (session != null) {
				session.close();
			}
		}
	}

	public User getUser(String name) {
		User user = null;
		try (Session session = sessionFactory.openSession()) {
			session.beginTransaction();
			user = (User) session.get(User.class, name);
			session.getTransaction().commit();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return user;
		
	}
}
