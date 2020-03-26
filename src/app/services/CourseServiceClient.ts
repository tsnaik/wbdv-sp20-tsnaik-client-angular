import { Injectable } from '@angular/core';

@Injectable()
export class CourseServiceClient {
    public findAllCourses = () =>
        fetch('http://wbdv-generic-server.herokuapp.com/api/tsnaik/courses')
            .then((response) => response.json())

    public findCourseById = (id: string) =>
        fetch('http://wbdv-generic-server.herokuapp.com/api/tsnaik/courses/' + id)
            .then((response) => response.json())


}


