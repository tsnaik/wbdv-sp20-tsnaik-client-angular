import { CourseServiceClient } from './../../services/CourseServiceClient';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css'],
})
export class CourseTableComponent implements OnInit {

  constructor(private service: CourseServiceClient) { }
  public courses = [];
  private title = 'Course List';
  public ngOnInit(): void {
    this.service.findAllCourses()
      .then((courses) => this.courses = courses);
  }

}
