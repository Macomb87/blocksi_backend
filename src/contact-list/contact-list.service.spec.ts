import { Test, TestingModule } from '@nestjs/testing';
import { ContactListService } from './contact-list.service';

describe('ContactListService', () => {
  let service: ContactListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactListService],
    }).compile();

    service = module.get<ContactListService>(ContactListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
