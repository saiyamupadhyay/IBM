package com.ibm.quizproject.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ibm.quizproject.entities.Question;

public interface QuestionRepository extends JpaRepository<Question, Integer>{

}
