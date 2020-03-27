import { QuizServiceClient } from './../../services/quiz.service.client';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  public courseId: string;
  quizzes = [];
  constructor(private service: QuizServiceClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(async (params) => {
      
      // const  = await this.service.findModulesForCourse(this.courseId);
    });
  }

}
