import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseServiceClient } from 'src/app/services/course.service.client';

@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css'],
})


export class CourseViewerComponent implements OnInit {
  public course;
  public moduleId: string;
  constructor(private service: CourseServiceClient,
              private route: ActivatedRoute) { }

  public ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.moduleId = params.mid;
      this.service.findCourseById(params.cid)
        .then((course) => this.course = course);
    });
  }

}
