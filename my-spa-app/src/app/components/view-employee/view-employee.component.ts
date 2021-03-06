import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee';
import { Router } from '@angular/router';
import {map, filter} from 'rxjs/operators'
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  employees:Array<any>=[];
  showMessage:boolean=false;
  constructor(private employeeService:EmployeeService ,private router:Router,public logService: LogService) {}

  ngOnInit(): void {
    this.employeeService.fetchAllEmployees()
    // .pipe(filter((res:Array<Employee>)=> ), map((res:Array<Employee>) => 'Count: ' + res))
    .pipe(map((obj:Array<Employee>) =>{console.log('In map', obj);
      return obj.filter( emp => emp.name !== '' )
      // console.log(filteredList)
      // return filteredList
      })
    )
    .subscribe((res:Array<Employee>)=> {
      console.log(res);
      this.employees = res;
    })

  }
  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id)
    .subscribe((res:any)=> {
      console.log(res);
     if(res.status == 200){
       this.showMessage = true;
       this.employees = this.employees.filter((employee)=> employee.id!=id)
     }
    })
  }
  editEmployee(employee:Employee){
    console.log("edit employee",employee);
    this.router.navigate(["add",employee]);
  }
  log(message: string){
    this.logService.add(message)
  }
}
