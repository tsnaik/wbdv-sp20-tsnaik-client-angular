import { Injectable } from '@angular/core';

@Injectable()
export class QuizServiceClient {
    private URL = 'https://wbdv-sp20-tsnaik-server-node.herokuapp.com/api/quizzes';
    // private URL = 'http://localhost:3000/api/quizzes';
    findAllQuizzes = () =>
        fetch(this.URL)
            .then(response => response.json())

    findQuizById = (qid) =>
        fetch(`${this.URL}/${qid}`)
            .then(response => response.json())

    submitQuiz = (quizId, questions) => {
        return fetch(`${this.URL}/${quizId}/attempts`, {
            method: 'POST',
            body: JSON.stringify(questions),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
    }

    findAttemptsForQuiz = (qId) =>
        fetch(`${this.URL}/${qId}/attempts`)
            .then(response => response.json())

}