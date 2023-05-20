import React from 'react';
import {Card, Text} from 'react-native-paper';
import {NoteData} from '../../data/model';

type Props = {
  note: NoteData;
  onPress: () => void;
};

const NotePreview = (props: Props) => {
  const {note, onPress} = props;

  return (
    <Card onPress={onPress}>
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
