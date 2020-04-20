import { Component, OnInit } from '@angular/core';
import { CourseServiceClient } from 'src/app/services/course.service.client';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {
  public modules = [];
  public courseId: string;
  public currentModule: string;
  constructor(private service: CourseServiceClient, private route: ActivatedRoute) { }

  public ngOnInit(): void {
    this.route.params.subscribe(async (params) => {
      this.courseId = params.cid;
      this.currentModule = params.mid;
      const modules = await this.service.findModulesForCourse(this.courseId);
      this.modules = modules;
    });
  }

}
