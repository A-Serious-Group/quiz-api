import { Test, TestingModule } from '@nestjs/testing';
import { QueezyQuestionService } from './queezy_question.service';
import { PrismaDbConfigService } from '../../../prisma/prisma-db-config/prisma-db-config.service'; // Import the PrismaDbConfigService

describe('QueezyQuestionService', () => {
  describe('QueezyQuestionService', () => {
    let service: QueezyQuestionService;
  

    beforeEach(() => {
      const prismaDbService = new PrismaDbConfigService(); // Use the PrismaDbConfigService as the argument
      service = new QueezyQuestionService(prismaDbService);
    });
  
    it('should answer a question for a user', async () => {
      const userId = 1;
      const answerId = 21;
      const chosenUserId = 1; // Provide the missing argument

      // Initialize the game for the user
      const startgame = await service.startGame(userId, chosenUserId);
      console.log(startgame, 'startgame')

      // Now you can call answerQuestion without getting an undefined error
      const result = await service.answerQuestion(userId, answerId);
      console.log(result, 'result')

      expect(result).toBeDefined();
    });
  });
});
