import { AllQuestions } from "./model";

export const filterData = (questions, topics) => {
    return new AllQuestions(questions).filterQuestionsByTopics(topics);
}

