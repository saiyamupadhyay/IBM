import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-view-survey',
  templateUrl: './view-survey.component.html',
  styleUrls: ['./view-survey.component.css']
})
export class ViewSurveyComponent implements OnInit {

  survey:Array<any>=[];
  constructor(private surveyService:SurveyService,private router:Router) { }

  ngOnInit(): void {
    this.surveyService.fetchAllQuiz().subscribe((res:any)=>{
      console.log(res);
      this.survey=res;
    })
  }
  takeQuiz(questions:any){
    console.log("in take quiz",questions);
    this.router.navigate(["takeQuiz",{name:questions.name}]);
  }
}
