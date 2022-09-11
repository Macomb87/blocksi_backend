import { Test, TestingModule } from '@nestjs/testing';
import { ContactListController } from './contact-list.controller';
import { ContactListService } from './contact-list.service';

describe('ContactListController', () => {
  let controller: ContactListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactListController],
      providers: [ContactListService],
    }).compile();

    controller = module.get<ContactListController>(ContactListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
