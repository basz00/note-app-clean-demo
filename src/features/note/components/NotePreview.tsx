import React from 'react';
import {Card, Text} from 'react-native-paper';
import {Note} from '../model';

type Props = {
  note: Note;
};

const NotePreview = (props: Props) => {
  const {note} = props;

  return (
    <Card>
      <Card.Title title={note.title} />
      <Card.Content>
        <Text numberOfLines={1} variant="bodyMedium">
          {note.content}
        </Text>
      </Card.Content>
    </Card>
  );
};

export default NotePreview;
