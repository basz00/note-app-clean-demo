import {NoteData} from './note';

export interface NoteState {
  notes: Array<NoteData>;
}

const dummyNotes: Array<NoteData> = [
  {
    id: 0,
    title: '0',
    content:
      'Vivamus sed tristique neque. Pellentesque ut est eu diam consequat sodales ut sit amet quam.',
    createdAt: Math.floor(Date.now() / 1000),
    lastModifiedAt: Math.floor(Date.now() / 1000),
  },
  {
    id: 1,
    title: '1',
    content:
      'Vivamus sed tristique neque. Pellentesque ut est eu diam consequat sodales ut sit amet quam.',
    createdAt: Math.floor(Date.now() / 1000),
    lastModifiedAt: Math.floor(Date.now() / 1000),
  },
  {
    id: 2,
    title: '2',
    content:
      'Vivamus sed tristique neque. Pellentesque ut est eu diam consequat sodales ut sit amet quam.',
    createdAt: Math.floor(Date.now() / 1000),
    lastModifiedAt: Math.floor(Date.now() / 1000),
  },
  {
    id: 3,
    title: '3',
    content:
      'Vivamus sed tristique neque. Pellentesque ut est eu diam consequat sodales ut sit amet quam.',
    createdAt: Math.floor(Date.now() / 1000),
    lastModifiedAt: Math.floor(Date.now() / 1000),
  },
  {
    id: 4,
    title: '4',
    content:
      'Vivamus sed tristique neque. Pellentesque ut est eu diam consequat sodales ut sit amet quam.',
    createdAt: Math.floor(Date.now() / 1000),
    lastModifiedAt: Math.floor(Date.now() / 1000),
  },
];

export class NoteState {
  constructor(noteState?: NoteState) {
    return {
      notes: noteState ? noteState.notes : [...dummyNotes],
    };
  }
}
