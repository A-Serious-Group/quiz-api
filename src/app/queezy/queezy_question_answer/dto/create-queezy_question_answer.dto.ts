export class CreateQueezyQuestionAnswerDto {
    game_name: string;
    question: Array<{
      id_question?: number;
      question: string;
      question_user_id?: number;
      imagem?: string | null;
      image?: string | null;
      game_id?: number;
      answer_fk?: Array<{
        id_answer?: number;
        answers: string;
        question_id?: number;
        answers_correct: boolean;
      }>;
      answers?: Array<{
        name: string;
        correct: boolean;
      }>;
    }>;
    restartOnError: boolean;
    user_id: number
  }