package youtube.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import youtube.model.Tag;
import youtube.model.Video;

@Entity
@Table(name="taglist")
public class TagList implements Serializable{

	private static final long serialVersionUID = 2467505249168351129L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "uid")
	private User user;


	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "vid")
	private Video video;
	
	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "tid")
	private Tag tag;
	
	
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Video getVideo() {
		return video;
	}

	public void setVideo(Video video) {
		this.video = video;
	}

	public Tag getTag() {
		return tag;
	}

	public void setTag(Tag tag) {
		this.tag = tag;
	}
}
