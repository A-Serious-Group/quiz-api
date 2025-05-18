export class CreateQueezyQuestionAnswerDto {
    game_name: string;
    question: {
      forEach(arg0: (element: any) => Promise<void>): unknown;
      title: string;
      imagem: string;
      answers: Array<{
        name: string;
        correct: boolean;
      }>;
    };
    restartOnError: boolean;
    user_id: number
  }