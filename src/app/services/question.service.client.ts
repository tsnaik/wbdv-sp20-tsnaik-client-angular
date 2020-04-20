import { Injectable } from '@angular/core';

@Injectable()
export class QuestionServiceClient {
    private URL = 'http://localhost:3000/api/quizzes';
    // private URL = 'https://wbdv-sp20-tsnaik-server-node.herokuapp.com/api/quizzes';
    findQuestionsForQuiz = (qid) =>
        fetch(`${this.URL}/${qid}/questions`)
            .then(response => response.json())
}
