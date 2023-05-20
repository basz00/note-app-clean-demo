import {Note, NotesRepository} from '../../domain/repository';
import {DataSource} from '../dataSource';

export class NotesRepositoryImpl implements NotesRepository {
  dataSource: DataSource;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }

  async getAllNotes(): Promise<Note[]> {
    return this.dataSource.getAllNotes();
  }
}
