import { Component, OnInit } from '@angular/core';
import { CourseServiceClient } from 'src/app/services/CourseServiceClient';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {
  public lessons = [];
  public courseId: string;
  public moduleId: string;
  public currentLesson: string;
  constructor(private service: CourseServiceClient, private route: ActivatedRoute) { }

  public ngOnInit(): void {
    this.route.params.subscribe(async (params) => {
      this.courseId = params.cid;
      this.moduleId = params.mid;
      this.currentLesson = params.lid;
      const lessons = await this.service.findLessonsForModule(this.moduleId);
      this.lessons = lessons;
    });
  }

}
