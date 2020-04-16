package com.ibm.quizproject.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Options {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int id;
	String options;
//	int question_id;
	boolean isAns;

//	public Options(int id, String options, int question_id, boolean isAns) {
//		super();
//		this.id = id;
//		this.options = options;
//		this.question_id = question_id;
//		this.isAns = isAns;
//	}
	

	public Options(int id, String options, boolean isAns) {
	super();
	this.id = id;
	this.options = options;
	this.isAns = isAns;
}
	
	public Options() {
	super();
}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getOptions() {
		return options;
	}

	public void setOptions(String options) {
		this.options = options;
	}

//	public int getQuestion_id() {
//		return question_id;
//	}
//
//	public void setQuestion_id(int question_id) {
//		this.question_id = question_id;
//	}

	public boolean isAns() {
		return isAns;
	}

	public void setAns(boolean isAns) {
		this.isAns = isAns;
	}
	@Override
	public String toString() {
		return "Options [id=" + id + ", options=" + options + ", isAns=" + isAns + "]";
	}
	

//	@Override
//	public String toString() {
//		return "Options [id=" + id + ", options=" + options + ", question_id=" + question_id + ", isAns=" + isAns + "]";
//	}

	
}
