package youtube.model;

import java.util.*;
import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name="video")
public class Video implements Serializable {

	private static final long serialVersionUID = 6245772803345049074L;
	
	@Id
	//@GeneratedValue(strategy = GenerationType.AUTO)
	private String id;
	
	private String url;
	
	@Column(name = "title")
	private String title;
	
	private String thumbnail;
	
	
	@OneToMany(mappedBy = "video", cascade = CascadeType.ALL)
	@JsonIgnore
	private Set<TagList> tagLists;
	
	
	//@ManyToMany(mappedBy="videoList")
	@ManyToMany(mappedBy="videoList", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JsonIgnore
	private List<User> userList;
	
	//@OneToOne(cascade = CascadeType.ALL, fetch=FetchType.EAGER)
	//@JoinColumn(name = "taglistId")
	//private TagList tagList;
	
	@OneToMany(mappedBy="video", cascade = CascadeType.ALL)
	@JsonIgnore
	private Set<NotePad> notePadList;
	
	public Set<NotePad> getNotePadList() {
		return notePadList;
	}

	public void setNotePadList(Set<NotePad> notePadList) {
		this.notePadList = notePadList;
	}

	public List<User> getUserList() {
		return this.userList;
	}

	public void setUserList(List<User> userList) {
		this.userList = userList;
	}

	public String getId() {
		return id;
	}
	
	public void setId(String id) {
		this.id = id;
	}
	
	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getThumbnail() {
		return thumbnail;
	}

	public void setThumbnail(String thumbnail) {
		this.thumbnail = thumbnail;
	}
	
	public Set<TagList> getTagLists() {
		return tagLists;
	}

	public void setTagLists(Set<TagList> tagLists) {
		this.tagLists = tagLists;
	}
	
}
