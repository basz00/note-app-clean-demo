import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import {FAB} from 'react-native-paper';
import {useNotesDependencies} from '../../../../core/di';
import {NoteStackParamList} from '../../../../core/navigation/paramList';
import {NoteData} from '../../data/model';
import NotePreview from '../components/NotePreview';
import {useOverviewController} from '../hooks';

const OverviewScreen = () => {
  const {width} = Dimensions.get('window');
  const flatListColumn = 2;
  const itemWidth = width / flatListColumn;

  const noteDependencies = useNotesDependencies();
  const {notes} = useOverviewController(noteDependencies.notesUseCase);

  const navigation = useNavigation<NavigationProp<NoteStackParamList>>();

  const renderNotePreview = (note: NoteData) => (
    <View style={{width: itemWidth}}>
      <NotePreview
        note={note}
        onPress={() => {
          navigation.navigate('Details', {noteId: ''});
        }}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        numColumns={flatListColumn}
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
