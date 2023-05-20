import {useCallback, useEffect, useState} from 'react';
import {Note} from '../../domain/repository';
import {NotesUseCase} from '../../domain/usecase';

export const useOverviewController = (notesUseCase: NotesUseCase) => {
  const [notes, setNotes] = useState<Array<Note>>([]);

  const getAllnotes = useCallback(async () => {
    try {
      const allNotes = await notesUseCase.getAllNotes();
      setNotes(allNotes);
    } catch (e) {
      console.log(e);
    }
  }, [notesUseCase]);

  useEffect(() => {
    getAllnotes();
  }, [getAllnotes]);

  return {notes};
};
