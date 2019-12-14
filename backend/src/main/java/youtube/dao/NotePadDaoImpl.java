package youtube.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import youtube.model.NotePad;

@Repository
public class NotePadDaoImpl implements NotePadDao {

	@Autowired
	private SessionFactory sessionFactory;

	public void addNotePad(NotePad notePad) {
		Session session = null;
		try {
			session = sessionFactory.openSession();
			session.beginTransaction();
			session.saveOrUpdate(notePad);
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

	public void editNotePad(int notePadId, String text) {
		Session session = null;
		NotePad notepad = null;
		try {
			session = sessionFactory.openSession();
			session.beginTransaction();
			notepad = (NotePad) session.get(NotePad.class, notePadId);
			notepad.setText(text);
			session.update(notepad);
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

	@Override
	public NotePad getNotePad(String uid, String vid) {
		NotePad notePad = null;
		try (Session session = sessionFactory.openSession()) {
			session.beginTransaction();
			String hql = "FROM NotePad n WHERE n.user.name=:uid and n.video.id=:vid";
			notePad = (NotePad)session.createQuery(hql)
									  .setParameter("uid", uid)
									  .setParameter("vid", vid)
									  .getSingleResult();	
			session.getTransaction().commit();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return notePad;
	}
}
