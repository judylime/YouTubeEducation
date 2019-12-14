package youtube.service;

import youtube.model.NotePad;

public interface NotePadService {
	void addNotePad(NotePad notePad);
	void editNotePad(int notePadId, String text);
	NotePad getNotePad(String uid, String vid);
}
