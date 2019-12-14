package youtube.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import youtube.dao.NotePadDao;
import youtube.model.NotePad;

@Service
public class NotePadServiceImpl implements NotePadService {
	@Autowired
	private NotePadDao notePadDao;
	
	@Override
	public void addNotePad(NotePad notePad) {
		notePadDao.addNotePad(notePad);
	}

	@Override
	public void editNotePad(int notePadId, String text) {
		notePadDao.editNotePad(notePadId, text);	
	}

	@Override
	public NotePad getNotePad(String uid, String vid) {
		return notePadDao.getNotePad(uid, vid);
	}
	
}
