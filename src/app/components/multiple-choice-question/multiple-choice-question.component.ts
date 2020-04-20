import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {
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
  submitAnswer = () => {

    this.answerChange.emit(this.answer)
  }
  ngOnInit(): void {
  }

}
