import {Note, NotesRepository} from '../repository';

export interface NotesUseCase {
  getAllNotes(): Promise<Array<Note>>;
}

export class NotesUseCaseImpl implements NotesUseCase {
  private repository: NotesRepository;

  constructor(repository: NotesRepository) {
    this.repository = repository;
  }

  getAllNotes(): Promise<Note[]> {
    return this.repository.getAllNotes();
  }
}
