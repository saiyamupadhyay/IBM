package com.ibm.hospitalmanagementsystem.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Doctor {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private String name;
	private String emailId;
	private long contactNumber;
	private String departmentName;
	private String desig;
	
	public Doctor() {
		super();
	}
	
	public Doctor(int id, String name, String emailId, long contactNumber, String departmentName,
			String desig) {
		super();
		this.id = id;
		this.name = name;
		this.emailId = emailId;
		this.contactNumber = contactNumber;
		this.departmentName = departmentName;
		this.desig = desig;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public long getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(long contactNumber) {
		this.contactNumber = contactNumber;
	}

	public String getDepartmentName() {
		return departmentName;
	}

	public void setDepartmentName(String departmentName) {
		this.departmentName = departmentName;
	}

	public String getDesig() {
		return desig;
	}

	public void setDesig(String desig) {
		this.desig = desig;
	}

	@Override
	public String toString() {
		return "Doctor [id=" + id + ", name=" + name + ", emailId=" + emailId + ", contactNumber=" + contactNumber
				+ ", departmentName=" + departmentName + ", desig=" + desig + "]";
	}

	
	
}
