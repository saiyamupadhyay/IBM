package com.ibm.hospitalmanagementsystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ibm.hospitalmanagementsystem.entities.Doctor;
import com.ibm.hospitalmanagementsystem.entities.Hospital;
import com.ibm.hospitalmanagementsystem.entities.Patient;
import com.ibm.hospitalmanagementsystem.repos.DoctorRepo;
import com.ibm.hospitalmanagementsystem.repos.HospitalRepo;
import com.ibm.hospitalmanagementsystem.repos.PatientRepo;

@Service
public class HospitalManagementService {

	@Autowired
	HospitalRepo hospitalRepo;
	
	@Autowired
	DoctorRepo doctorRepo;
	
	@Autowired
	PatientRepo patientRepo;

	public List<Hospital> findAllHospital() {
		List<Hospital> hospitals =  hospitalRepo.findAll();
		System.out.println(hospitals);
		return hospitals;
	}

	public Hospital addHospital(Hospital hospital) {
		return hospitalRepo.save(hospital);		
	}

	public List<Patient> findAllPatient() {
		List<Patient> patient =  patientRepo.findAll();
		System.out.println(patient);
		return patient;
	}

	public Patient addPatient(Patient patient) {
		return patientRepo.save(patient);
	}

	public List<Doctor> findByDepartment(String department) {
		return doctorRepo.findByDepartmentName(department);
	}
	
	
}
