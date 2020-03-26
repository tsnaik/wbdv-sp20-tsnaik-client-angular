import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseServiceClient } from 'src/app/services/CourseServiceClient';

@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css'],
})


export class CourseViewerComponent implements OnInit {
  public course;

  constructor(private service: CourseServiceClient,
    private route: ActivatedRoute) { }

  public ngOnInit(): void {
    this.route.params.subscribe(async (params) =>
      await this.service.findCourseById(params.cid)
        .then((course) => this.course = course));
  }

}
