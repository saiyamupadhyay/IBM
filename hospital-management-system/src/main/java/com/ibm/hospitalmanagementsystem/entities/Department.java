package com.ibm.hospitalmanagementsystem.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Department {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	int id;
	
	
}
