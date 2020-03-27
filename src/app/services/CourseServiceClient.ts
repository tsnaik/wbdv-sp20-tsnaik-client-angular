import { Injectable } from '@angular/core';

@Injectable()
export class CourseServiceClient {
    private URL = 'http://wbdv-generic-server.herokuapp.com/api/tsnaik';
    public findAllCourses = () =>
        fetch(this.URL + '/courses')
            .then((response) => response.json())

    public findCourseById = (id: string) =>
        fetch(`${this.URL}/courses/${id}`)
            .then((response) => response.json())

    public findModulesForCourse = (id: string) =>
        fetch(`${this.URL}/courses/${id}/modules`)
            .then((response) => response.json())

    public findLessonsForModule = (id: string) =>
        fetch(`${this.URL}/modules/${id}/lessons`)
            .then((response) => response.json())

}


