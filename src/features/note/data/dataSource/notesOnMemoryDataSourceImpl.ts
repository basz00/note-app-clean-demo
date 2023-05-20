import {useAppSelector} from '../../../../core/redux/hooks';
import {NoteData} from '../model';
import {DataSource} from './dataSource';

export class NotesOnMemoryDataSourceImpl implements DataSource {
  notes = useAppSelector(state => state.appReducer.note.notes);

  getAllNotes(): Promise<NoteData[]> {
    return new Promise(resolve => {
      resolve(this.notes);
    });
  }
}
