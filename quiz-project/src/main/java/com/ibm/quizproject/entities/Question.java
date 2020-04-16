package com.ibm.quizproject.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonProperty;


@Entity
public class Question {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	int id;
	String question;
	
	@OneToMany(targetEntity=Options.class, cascade=CascadeType.ALL)
	@JoinColumn(name="question_id_fk",referencedColumnName="id")
	List<Options>options;

	public Question(int id, String question, List<Options> options) {
		super();
		this.id = id;
		this.question = question;
		this.options = options;
	}
	
	public Question() {
		super();
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public List<Options> getOptions() {
		return options;
	}

	public void setOptions(List<Options> options) {
		this.options = options;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getId() {
		return id;
	}

	@Override
	public String toString() {
		return "Quiz [id=" + id + ", question=" + question + ", options=" + options + "]";
	}
	
}
