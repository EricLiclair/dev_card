// The following structures are only utilised in the frontend 
// and need not necessarily be similar to the firestore data 
class Question {
    constructor({ qid, description, link, topics }) {
        this.qid = qid;
        this.description = description;
        this.link = link;
        this.topics = topics;
    }

    getTopics() {
        return this.topics;
    }
}


export class AllQuestions {
    constructor(questions) {
        this.questions = questions.map((question) => new Question(question));
    }

    filterQuestionsByTopics(topics) {
        if (topics.length > 0) {
            return this.questions.filter((question) => topics.some((topic) => question.getTopics().indexOf(topic) >= 0));
        } else {
            return this.questions
        }
    }
}