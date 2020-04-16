package com.ibm.quizproject.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ibm.quizproject.entities.Question;
import com.ibm.quizproject.repos.OptionsRepository;
import com.ibm.quizproject.repos.QuestionRepository;

@Service
public class QuizService {

	@Autowired
	QuestionRepository questionRepository;
	
	@Autowired
	OptionsRepository optionsRepository;

	public Question addQuestions(Question question) {
		return questionRepository.save(question);
		
	}

	public List<Question> findAllQuestion() {
		return questionRepository.findAll();
	}
}
