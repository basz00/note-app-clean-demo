import React, {useContext, ReactNode} from 'react';
import {createContext} from 'react';
import {NotesDependencies} from '../../features/note/presentation/di';
import {NotesUseCaseImpl} from '../../features/note/domain/usecase';
import {NotesRepositoryImpl} from '../../features/note/data/repository';
import {NotesOnMemoryDataSourceImpl} from '../../features/note/data/dataSource';

type AppDependencies = {
  notes: NotesDependencies;
};

const AppContext = createContext<AppDependencies>(undefined!);

export const AppDependenciesProvider = ({children}: {children: ReactNode}) => {
  const appDependencies: AppDependencies = {
    notes: {
      notesUseCase: new NotesUseCaseImpl(
        new NotesRepositoryImpl(new NotesOnMemoryDataSourceImpl()),
      ),
    },
  };

  return (
    <AppContext.Provider value={appDependencies}>
      {children}
    </AppContext.Provider>
  );
};

export const useNotesDependencies = () => useContext(AppContext).notes;
