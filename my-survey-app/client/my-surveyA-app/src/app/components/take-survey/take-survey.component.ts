import { Component, OnInit } from '@angular/core';
import { SurveyService } from 'src/app/services/survey.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-take-survey',
  templateUrl: './take-survey.component.html',
  styleUrls: ['./take-survey.component.css']
})
export class TakeSurveyComponent implements OnInit {

  currentQuestion: any;
  choices: Array<any> = [];
  quizName: string;
  questions: Array<any> = [];
  index: number = 0;
  length: any;
  isLastQuestion: boolean = false;
  isFirstQuestion: boolean = false;
  answer: Array<any> = [];
  count: number = 0;
  currentQuestionText: string;
  value:number;

  constructor(private surveyServive:SurveyService,private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log('***', params.get('name'));
      this.quizName = params.get("name");
      console.log(this.quizName);
    })
    this.surveyServive.fetchSingleQuizQuestion(this.quizName).subscribe((res: any) => {
      console.log(res);
      this.questions = res.questions;
      this.length = this.questions.length;
      console.log("questions", this.questions);
      this.currentQuestion = this.questions[this.index];
      this.currentQuestionText = this.currentQuestion.text;
      console.log("current question text", this.currentQuestionText)
      console.log("current question", this.currentQuestion);
      this.choices = this.currentQuestion.choices;
      console.log("current choice", this.choices);
      console.log("length of question", this.length);
      this.isFirstQuestion = true;
      // this.answer=this.choices[0].isAnswer;
      // console.log("isAnswer",this.answer)
    })

  }

  nextQuestion() {
    if (this.index < this.length) {
      ++this.index;
      if (this.index > 0) {
        this.isFirstQuestion = false;
        // console.log("from next",this.isFirstQuestion);
      }

      console.log(this.index);
      this.currentQuestion = this.questions[this.index];
      this.currentQuestionText = this.currentQuestion.text;
      this.choices = this.currentQuestion.choices;
      this.value=(this.index/this.length)*100;
      console.log("value is",this.value);
      this.isLastQuestion = false;
      //  console.log("last question",this.isLastQuestion);
      if (this.index == this.length - 1) {
        this.isLastQuestion = true;
        // console.log(this.isLastQuestion);
      }
    }

  }
  previousQuestion() {
    if (this.index > 0) {
      --this.index;
      if (this.index < this.length) {
        this.isLastQuestion = false;
      }
      console.log(this.index);
      this.currentQuestion = this.questions[this.index];
      this.currentQuestionText = this.currentQuestion.text;
      this.choices = this.currentQuestion.choices;
      this.value=(this.index/this.length)*100;
      console.log("value is",this.value);
      this.isFirstQuestion = false;
      console.log("first question", this.isFirstQuestion);
      if (this.index == 0) {
        this.isFirstQuestion = true;
        console.log("first question", this.isFirstQuestion);
      }
    }
  }
  calculate(count: number, id: number) {
    // this.answer[this.index] = isAnswer;
    // console.log(this.answer);
    console.log("option",count,id);
   this.surveyServive.updateChoice(id).subscribe(res=>{
     console.log(res);
   });
  }
  viewResult() {
    this.answer.forEach(i => {
      if (i == true) {
        this.count++;
      }
    });
    console.log("result", this.count);
//    this.router.navigate(["viewResult", { count: this.count, totalQuestion: this.length }]);

  }
}1
