package youtube.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name="notepad")
public class NotePad implements Serializable{

	private static final long serialVersionUID = 4293560815354484102L;
	

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	private String text;
	
	@ManyToOne
	@JoinColumn(name="vid")
	private Video video;
	
	@ManyToOne
	@JoinColumn(name="uid")
	private User user;
	
	
	public int getId() {
		return id;
	}

	public Video getVideo() {
		return video;
	}

	public void setVideo(Video video) {
		this.video = video;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}
	
}
