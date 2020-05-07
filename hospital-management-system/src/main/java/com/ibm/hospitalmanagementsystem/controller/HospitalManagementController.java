package com.ibm.hospitalmanagementsystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.hospitalmanagementsystem.entities.Doctor;
import com.ibm.hospitalmanagementsystem.entities.Hospital;
import com.ibm.hospitalmanagementsystem.entities.Patient;
import com.ibm.hospitalmanagementsystem.service.HospitalManagementService;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class HospitalManagementController {

	@Autowired
	HospitalManagementService hospitalManagementService;
	
	@GetMapping("/hospital")
	public List<Hospital> findAllHospital(){
		return hospitalManagementService.findAllHospital();
	}
	
	@PostMapping("/hospital")
	public ResponseEntity<Void> addHospital(@RequestBody Hospital hospital) {
		hospitalManagementService.addHospital(hospital);
		ResponseEntity<Void> re = new ResponseEntity<Void>(HttpStatus.CREATED);
		return re;

	}
	
	@GetMapping("/hospital/patient")
	public List<Patient> findAllPatient(){
		return hospitalManagementService.findAllPatient();
	}
	
	@PostMapping("/hospital/patient")
	public ResponseEntity<Void> addPatient(@RequestBody Patient patient) {
		hospitalManagementService.addPatient(patient);
		ResponseEntity<Void> re = new ResponseEntity<Void>(HttpStatus.CREATED);
		return re;
	}
	
	@GetMapping("/hospital/department/{department}")
	public List<Doctor> findByDepartment(@PathVariable("department") String department){
		return hospitalManagementService.findByDepartment(department);
	}

}
