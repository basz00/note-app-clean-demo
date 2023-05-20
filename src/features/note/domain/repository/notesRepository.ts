export type Note = {
  id: number;
  title: string;
  createdAt: number;
  lastModifiedAt: number;
  content: string;
};

export interface NotesRepository {
  getAllNotes(): Promise<Array<Note>>;
}
