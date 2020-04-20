import { QuizServiceClient } from 'src/app/services/quiz.service.client';
import { QuestionServiceClient } from './../../services/question.service.client';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quizId: string;
  questions = [];
  courseId: String;
  constructor(private service: QuestionServiceClient, private route: ActivatedRoute,
    private quizService: QuizServiceClient, private _location: Location) { }

  ngOnInit(): void {
    this.route.params.subscribe(async (params) => {
      this.quizId = params.quizId;
      this.courseId = params.courseId;
      this.questions = await this.service.findQuestionsForQuiz(this.quizId);
    });
  }
  submitQuiz = async () => {
    const response = await this.quizService.submitQuiz(this.quizId, this.questions);
    this._location.back();
  }
}