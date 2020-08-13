import axios from 'axios';
import constants from '../constants/constants';

const triviaApi = axios.create({
    baseURL: constants.triviaURL
});

export const fetchQuestionsList = async (amount:number, difficulty:string, type:string) => {
    return triviaApi.get('', {
        params: {
          amount: amount,
          difficulty: difficulty,
          type: type
        }
      }).then(
        (response:any) => {
            return response.data;
        }
    ).then( async (json:any) => {
        let questionsList = await json.results.map((question:any) => { return {
                
            category: question.category, 
            correct_answer: question.correct_answer, 
            difficulty: question.difficulty, 
            incorrect_answers: question.incorrect_answers,
            question: question.question,
            type: question.type

        }})
        return questionsList;
    }).catch( (error:Error) => { console.log(error)})
}

export default triviaApi;