import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-add-survey',
  templateUrl: './add-survey.component.html',
  styleUrls: ['./add-survey.component.css']
})
export class AddSurveyComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder,private surveyService: SurveyService) { }

  ngOnInit(): void {

    this.createForm()
    
    //*-*-*-*-*-*--*-*-*-*-*-*-*-*-*--*-*
    
    // this.myForm = this.fb.group({
    //   name: ["", Validators.required],
    //   // questionText: ["", Validators.required],
      // choices: this.fb.array([], Validators.required),
    //   question:this.fb.array([])
    // })


  }

  // get name() {
  //   return this.myForm.get("name");
  // }

  // get questionText() {
  //   return this.myForm.get("questionText");
  // }
  // get text() {
  //   return this.optionForm.get("text");
  // }

  // get questionForm(){
  //   return this.myForm.get("question") as FormArray
  // }

  // get optionForm() {
  //   var i=0;
  //   //return this.myForm.get("questions").get("choices") as FormArray
  //   return (<FormArray>this.myForm.controls["questions"]).at(i).get("choices") as FormArray
  // }

  // createQuestion(){
  //   const que = this.fb.group({
  //     questionText:[],
  //     choices:this.fb.array([])
  //   })
  //   return que;
  // }
  
  // createOptions() {
  //   const choices =this.fb.group({
  //     text: []
  //   })
  //   return choices;
  // }

  // addQuestion(){
  //   let question = this.createQuestion()
  //   this.questionForm.push(question)
  // }

  // addOptions() {
  //   let choices = this.createOptions()
  //   console.log(choices.value)
  //   // this.optionForm.push(choices);
  // }

  // deleteOptions(i) {
  //   this.optionForm.removeAt(i);
  // }

  // onSubmit(){
  //   console.log(this.myForm.value)
  // }
 
  //*-*-*-*-*-*-*-*-*-*-*-*
  

  createForm() {
    this.myForm = this.fb.group({
      name: [""],
      questions: this.fb.array([this.createQuestionArray()])
    })
    
  }
  createQuestionArray() {
    return this.fb.group({
      text: [""],
      choices: new FormArray([
        this.createOptionArray()
      ])
    })
  }

  getSurveyQuestions(form){
    return form.controls.questions.controls;
  }

  getOptions(form){
    return form.controls.choices.controls;
  }

  createOptionArray() {
    return this.fb.group({
      text: [""]
    })
  }


  addSurveyQuestion(){
    const ctr = <FormArray>this.myForm.get("questions");
    ctr.push(this.createQuestionArray());
  }

  addOptions(i){
    //const ctr = <FormArray>this.myForm.get("questions").controls[i].get("choices");
   // const ctr = <FormArray>this.myForm.get("questions").get("choices");
    const ctr = (<FormArray>this.myForm.controls["questions"]).at(i).get("choices") as FormArray 
    ctr.push(this.createOptionArray());
  }

  submit(){
    console.log(this.myForm.value)
    this.surveyService.addSurvey(this.myForm.value).subscribe(res=>{
      console.log(res);
    })
  }
}
