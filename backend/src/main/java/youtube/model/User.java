package youtube.model;

import java.util.*;
import java.io.Serializable;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="user")
public class User implements Serializable {
	
	private static final long serialVersionUID = 1403127327680380728L;

	@Id
	@Column(name = "name")
	private String name;
	
	@Column(name = "pwd")
	private String pwd;
	
	@OneToMany(mappedBy="user", cascade = CascadeType.ALL)
	@JsonIgnore
	private Set<TagList> tagLists;
	
	@ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JsonIgnore
	private List<Video> videoList;
	
	public Set<NotePad> getNotePadList() {
		return notePadList;
	}

	public void setNotePadList(Set<NotePad> notePadList) {
		this.notePadList = notePadList;
	}

	@OneToMany(mappedBy="user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	// (FetchMode.SELECT)
	@JsonIgnore
	private Set<NotePad> notePadList;
	
	public String getName() {
		return this.name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getPassword() {
		return this.pwd;
	}

	public void setPassword(String pwd) {
		this.pwd = pwd;
	}
	
	public Set<TagList> getTagLists() {
		return tagLists;
	}

	public void setTagLists(Set<TagList> tagLists) {
		this.tagLists = tagLists;
	}


	public void setVideoList(List<Video> videoList) {
		this.videoList = videoList;
	}
	
	public List<Video> getVideoList() {
		return this.videoList;
	}
	
}