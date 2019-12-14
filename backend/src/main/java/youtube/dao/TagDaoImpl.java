package youtube.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import youtube.model.Tag;
import youtube.model.TagList;

@Repository
public class TagDaoImpl implements TagDao{
	@Autowired
	private SessionFactory sessionFactory;
	
	public void addTag(Tag tag) {
		Session session = null;
		try {
			session = sessionFactory.openSession();
			session.beginTransaction();
			session.saveOrUpdate(tag);
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
	
//	public void removeTag(int TagId) {
//		Session session = null;
//		try {
//			session = sessionFactory.openSession();
//			Tag tag = (Tag) session.get(Tag.class, TagId);
//			TagList taglist = tag.getTagList();
//			List<Tag> tags = taglist.getTagList();
//			tags.remove(tag);
//			session.beginTransaction();
//			session.delete(tag);
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
