import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl='http://localhost:8000/api/survey/';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private http:HttpClient) { }
  fetchAllQuiz(){
    return this.http.get(baseUrl);
  }
  fetchSingleQuizQuestion(quizName:string){
    return this.http.get(baseUrl+quizName);
  }

  updateChoice(id:number){
    console.log("in update",id);
    return this.http.put(baseUrl+id,"",{observe:"response"});
    // return this.http.put("http://localhost:8000/api/survey/3","");
  }

  addSurvey(survey : any){
    console.log("in addSurvey");
    return this.http.post(baseUrl,survey,{observe:"response"});
  }
}
