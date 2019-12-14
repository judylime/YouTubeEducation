package youtube.dao;

import java.util.*;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import youtube.model.*;

@Repository
public class TagListDaoImpl implements TagListDao{
	@Autowired
	private SessionFactory sessionFactory;

	public void addTagList(TagList tagList) {
		Session session = null;
		try {
			session = sessionFactory.openSession();
			session.beginTransaction();
			session.saveOrUpdate(tagList);
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

	@SuppressWarnings("unchecked")
	@Override
	public List<Tag> getTags(String uid, String vid) {
		Session session = null;
		List<Tag> tags = new ArrayList<>();
		try {
			session = sessionFactory.openSession();
			session.beginTransaction();
			String hql = "FROM TagList t WHERE t.user.name=:uid and t.video.id=:vid";
			List<TagList> taglists = (List<TagList>) session.createQuery(hql)
								  .setParameter("uid", uid)
								  .setParameter("vid", vid)
								  .list();
			for (TagList taglist : taglists) {
				tags.add(taglist.getTag());
			}
			session.getTransaction().commit();
		} catch (Exception e) {
			e.printStackTrace();
			session.getTransaction().rollback();
		} finally {
			if (session != null) {
				session.close();
			}
		}
		return tags;
	}
	
}
