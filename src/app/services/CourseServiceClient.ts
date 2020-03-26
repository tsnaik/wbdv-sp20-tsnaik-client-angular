import { Injectable } from '@angular/core';

@Injectable()
export class CourseServiceClient {
    private URL = 'http://wbdv-generic-server.herokuapp.com/api/tsnaik/courses';
    public findAllCourses = () =>
        fetch(this.URL)
            .then((response) => response.json())

    public findCourseById = (id: string) =>
        fetch(`${this.URL}/${id}`)
            .then((response) => response.json())

    public findModulesForCourse = (id: string) =>
        fetch(`${this.URL}/${id}/modules`)
            .then((response) => response.json())

}


