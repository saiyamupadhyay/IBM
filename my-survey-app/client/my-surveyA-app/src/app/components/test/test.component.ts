import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

//    this.createForm()

    //*-*-*-*-*-*--*-*-*-*-*-*-*-*-*--*-*
    // this.myForm = this.fb.group({
    //   surveyName: ["", Validators.required],
    //   questionText: ["", Validators.required],
    //   options: this.fb.array([], Validators.required)
    // })
  }

    // get surveyName() {
  //   return this.myForm.get("surveyName");
  // }

  // get questionText() {
  //   return this.myForm.get("questionText");
  // }
  // get optionText() {
  //   return this.optionForm.get("optionText");
  // }
  // get optionForm() {
  //   return this.myForm.get("options") as FormArray
  // }

  // createOptions() {
  //   const options = this.fb.group({
  //     optionText: []
  //   })
  //   return options;
  // }

  // addOptions() {
  //   let options = this.createOptions()
  //   this.optionForm.push(options);
  // }

  // deleteOptions(i) {
  //   this.optionForm.removeAt(i);
  // }

  // onSubmit(){
  //   console.log(this.myForm.value)
  // }
  //*-*-*-*-*-*-*-*-*-*-*-*
  
  // createForm() {
  //   this.myForm = this.fb.group({
  //     surveyName: [""],
  //     surveyQuestion: this.fb.array([this.createQuestionArray()])
  //   })
  // }
  // createQuestionArray() {
  //   return this.fb.group({
  //     questionText: [""],
  //     options: new FormArray([
  //       this.createOptionArray()
  //     ])
  //   })
  // }

  // getSurveyQuestions(form){
  //   return form.controls.surveyQuestion.controls;
  // }

  // getOptions(form){
  //   return form.controls.options.controls;
  // }

  // createOptionArray() {
  //   return this.fb.group({
  //     optionText: [""]
  //   })
  // }


  // addSurveyQuestion(){
  //   const ctr = <FormArray>this.myForm.get("surveyQuestion");
  //   ctr.push(this.createQuestionArray());
  // }

  // addOptions(i){
    // const ctr = <FormArray>this.myForm.get("surveyQuestion").controls[i].get("options");
   //const ctr = <FormArray>this.myForm.get("surveyQuestion").insert(i,this.createOptionArray());
    //ctr.push(this.createOptionArray());
  // }

  // submit(){
  //   console.log(this.myForm.value)
  // }
}
