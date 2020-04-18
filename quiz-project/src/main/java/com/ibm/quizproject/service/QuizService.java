package com.ibm.quizproject.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ibm.quizproject.entities.Question;
import com.ibm.quizproject.entities.Quiz;
import com.ibm.quizproject.repos.ChoiceRepository;
import com.ibm.quizproject.repos.QuestionRepository;
import com.ibm.quizproject.repos.QuizRepository;

@Service
public class QuizService {

	@Autowired
	QuestionRepository questionRepository;
	
	@Autowired
	ChoiceRepository choiceRepository;
	
	@Autowired
	QuizRepository quizRepository;

	public Question addQuestions(Question question) {
		return questionRepository.save(question);
		
	}

	public List<Question> findAllQuestion() {
		List<Question> questions =  questionRepository.findAll();
		System.out.println(questions);
		return questions;
	}
	
	public Quiz addQuiz(Quiz quiz) {
		return quizRepository.save(quiz);
		
	}

	public List<Quiz> findAllQuiz() {
		List<Quiz> quizzes =  quizRepository.findAll();
		System.out.println(quizzes);
		return quizzes;
	}

	public Quiz findQuizByName(String name) {
		return quizRepository.findByName(name);
	}
}
