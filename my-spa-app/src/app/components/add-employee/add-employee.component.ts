import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee:Array<Employee>=[];
  showMessage:boolean=false;
  myForm:FormGroup;  
  editMode:boolean=false;
  constructor(private emoloyeeService:EmployeeService,private route:ActivatedRoute) { 
    this.myForm=new FormGroup({
      'id': new FormControl('' ,[Validators.required]),
      "name": new FormControl("",Validators.required),
      "salary": new FormControl("",Validators.min(1000))
    })
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log('***', params.get('id'));
      if(params.get('id') != null){
         this.editMode = true;
      }
      this.myForm.controls['id'].setValue(params.get('id'));
      this.myForm.controls['name'].setValue(params.get('name'));
      this.myForm.controls['salary'].setValue(params.get('salary'));
    });
  }
  updateEmployee(){
    console.log(this.myForm)
    console.log(this.myForm.value);
    // console.log(this.myForm.controls['name'])
    // console.log(name, salary);
    this.emoloyeeService.updateEmployee(this.myForm.value)
    .subscribe(res=>{
      console.log(res)
      if(res.status == 202){
        this.showMessage = true;
      }
    });
  }

  // addEmployee(name:string,salary:number){
  //   console.log(name,salary);
  //   return this.emoloyeeService.addEmployee(name,salary).subscribe(res =>{
  //     console.log(res);
  //     if(res.status == 201){
  //       this.showMessage = true;
  //     }
  //   })
  // }
  addEmployee(){
    console.log(this.myForm);
    console.log(this.myForm.controls["name"]);
    this.emoloyeeService.addEmployee(this.myForm.value)
    .subscribe(res=>{
      console.log(res);
      if(res.status==201){
        this.showMessage=true;
      }
    })
  }
}
