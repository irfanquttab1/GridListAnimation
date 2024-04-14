import {useState} from 'react';
import {styles} from './Style';
import {RenderItem} from '../RenderItem/RenderItem';
import {FloatingButton} from '../FloatingButton/FloatingButton';
import {View} from 'react-native';

export const GridListLayout = () => {
  const [layout, setLayout] = useState('grid');

  return (
    <View style={styles.container}>
      <RenderItem layout={layout} />
      <FloatingButton
        onPress={() => {
          setLayout(currentLayout =>
            currentLayout === 'grid' ? 'list' : 'grid',
          );
        }}
        layout={layout}
      />
    </View>
  );
};
