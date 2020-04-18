package com.ibm.quizproject.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ibm.quizproject.entities.Choice;

public interface ChoiceRepository extends JpaRepository<Choice, Integer>{

}
