package youtube.model;

import java.util.*;
import java.io.Serializable;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import youtube.model.TagList;

@Entity
@Table(name="tag")
public class Tag implements Serializable {
	
	private static final long serialVersionUID = 7423588675991231809L;
	
	@Id
	private String name;
	
	@OneToMany(mappedBy = "tag", cascade = CascadeType.ALL)
	@JsonIgnore
	private Set<TagList> tagLists;
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Set<TagList> getTagLists() {
		return tagLists;
	}

	public void setTagLists(Set<TagList> tagLists) {
		this.tagLists = tagLists;
	}

}
