import { QuestionServiceClient } from './../../services/question.service.client';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quizId: string;
  questions = [];
  constructor(private service: QuestionServiceClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(async (params) => {
      this.quizId = params.quizId;
      this.questions = await this.service.findQuestionsForQuiz(this.quizId);
    });
  }

}
