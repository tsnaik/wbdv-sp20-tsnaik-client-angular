import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {

  isGraded = false;
  isRightAnswer = false;
  public grade = () => {
    if (this.answer === '') {
      return;
    }
    this.isRightAnswer = (this.answer === this.question.correct);
    this.isGraded = true;
  }
  constructor() { }
  @Input()
  question;
  
  @Input()
  answer = '';

  @Output()
  answerChange = new EventEmitter<string>()
  submitAnswer = () =>{
    this.answerChange.emit(this.answer)
}
  ngOnInit(): void {
  }

}
