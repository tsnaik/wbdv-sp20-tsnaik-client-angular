import { Component, OnInit } from '@angular/core';
import { QuizServiceClient } from 'src/app/services/quiz.service.client';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

  constructor(private service: QuizServiceClient,
    private route: ActivatedRoute
  ) { }
  courseId = ''
  quizzes = []

  ngOnInit(): void {
    this.route.params.subscribe(async (params) => {
      this.courseId = params.courseId;
      this.quizzes = await this.service.findAllQuizzes();
    });

  }

}
