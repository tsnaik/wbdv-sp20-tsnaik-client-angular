import { Injectable } from '@angular/core';

@Injectable()
export class QuizServiceClient {
    private URL = 'http://localhost:3000/api/quizzes';
    findAllQuizzes = () =>
        fetch(this.URL)
            .then(response => response.json())

    findQuizById = (qid) =>
        fetch(`${this.URL}/${qid}`)
            .then(response => response.json())

}