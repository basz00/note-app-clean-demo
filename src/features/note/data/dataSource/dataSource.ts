import {NoteData} from '../model';

export interface DataSource {
  getAllNotes(): Promise<Array<NoteData>>;
}
