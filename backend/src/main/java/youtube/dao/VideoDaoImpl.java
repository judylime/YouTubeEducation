package youtube.dao;

import java.util.*;

import org.hibernate.Hibernate;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import youtube.model.TagList;
import youtube.model.User;
import youtube.model.Video;

@Repository
public class VideoDaoImpl implements VideoDao{
	
	@Autowired
	private SessionFactory sessionFactory;
	
	public void addVideo(Video video) {
		Session session = null;
		try {
			session = sessionFactory.openSession();
			session.beginTransaction();
			session.saveOrUpdate(video);
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
	
	public Video getVideoById(String id, String name) {
		Video video = null;
		try (Session session = sessionFactory.openSession()) {
			session.beginTransaction();
			// use hql to query many to many assoication
			String hql = "SELECT v FROM User u JOIN u.videoList v WHERE u.name = :name and v.id = :id";
			video = (Video)session.createQuery(hql)
								  .setParameter("name", name)
								  .setParameter("id", id)
								  .getSingleResult();	
			session.getTransaction().commit();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return video;
	}
	
	
	/*
	 * Option 1: Use criteria object but cannot solve many to many association 
	 * // Create CriteriaBuilder CriteriaBuilder builder =
	 * session.getCriteriaBuilder(); // Create CriteriaQuery CriteriaQuery<Video>
	 * criteria = builder.createQuery(Video.class); // root from Root<Video>
	 * videoRoot = criteria.from(Video.class); // Select criteria.select(videoRoot);
	 * // Where criteria.where(builder.like(videoRoot.<String>get("title"), "%" +
	 * title + "%"));
	 * 
	 * Option 2: use HQL or JPQL, which is the solution here
	 */
	@SuppressWarnings("unchecked")
	public List<Video> getVideoByTitle(String title, String name) {
		List<Video> videoList = new ArrayList<>();
		try (Session session = sessionFactory.openSession()) {
			session.beginTransaction();
			// table name is the type of variable not the name of table
			String hql = "SELECT v FROM User u JOIN u.videoList v WHERE u.name = :name and v.title like :title";
			videoList = (List<Video>)session.createQuery(hql)
											.setParameter("name", name) // set parameter for query   
											.setParameter("title", "%" + title + "%")
											.getResultList();
			session.getTransaction().commit();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return videoList;
	}
	
	public List<Video> getVideoAll (User user) {
		List<Video> videoList = new ArrayList<>();
		try (Session session = sessionFactory.openSession()) {
			session.beginTransaction();
			// avoid Hibernate collection is not associated with any session
			session.refresh(user);
			// initialize collection with hibernate
			Hibernate.initialize(user.getVideoList());
			videoList = user.getVideoList();
			session.getTransaction().commit();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return videoList;
	}
	
//	public void removeVideo(int VideoId) {
//		Session session = null;
//		try {
//			session = sessionFactory.openSession();
//			Video video = (Video) session.get(Video.class, VideoId);
//			VideoList videolist = video.getVideoList();
//			List<Video> videos = videolist.getVideoList();
//			videos.remove(video);
//			session.beginTransaction();
//			session.delete(video);
//			session.getTransaction().commit();
//		} catch (Exception e) {
//			e.printStackTrace();
//			session.getTransaction().rollback();
//		} finally {
//			if (session != null) {
//				session.close();
//			}
//		}
//	}

}
