import { Component, OnInit, Input } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  @Input("todos") todos:string = "Meeting at 7";
  constructor(public courseService:CourseService) { }


  ngOnInit(): void {
  }

}
