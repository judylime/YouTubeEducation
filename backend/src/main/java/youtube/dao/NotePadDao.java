package youtube.dao;

import youtube.model.NotePad;


public interface NotePadDao {
	void addNotePad(NotePad noteOad);
	void editNotePad(int notePadId, String text);
	NotePad getNotePad(String uid, String vid);
}
