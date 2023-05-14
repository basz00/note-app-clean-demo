import React from 'react';
import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import NotePreview from '../components/NotePreview';
import {Note} from '../model';
import {useAppSelector} from '../../../core/redux/hooks';
import {FAB} from 'react-native-paper';

const OverviewScreen = () => {
  const {width} = Dimensions.get('window');
  const flatListColumn = 2;
  const itemWidth = width / flatListColumn;

  const notes = useAppSelector(state => state.appReducer.note.notes);

  const renderNotePreview = (note: Note) => (
    <View style={{width: itemWidth}}>
      <NotePreview note={note} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        numColumns={2}
        renderItem={({item}) => renderNotePreview(item)}
        keyExtractor={(_item, index) => '' + index}
        contentContainerStyle={styles.flatListContent}
      />
      <FAB
        icon="plus"
        onPress={() => console.log('Pressed')}
        style={styles.fab}
        mode="flat"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  flatListContent: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default OverviewScreen;
