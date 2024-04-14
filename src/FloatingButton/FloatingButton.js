import {TouchableOpacity} from 'react-native';
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
} from 'react-native-reanimated';
import {styles} from './Style';

export const FloatingButton = ({layout, onPress}) => {
  const isExpanded = layout === 'list';

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.9}>
      <Animated.View
        layout={LinearTransition}
        style={[
          styles.animatedView,
          {
            flexDirection: isExpanded ? 'column' : 'row',
            flexWrap: isExpanded ? 'nowrap' : 'wrap',
          },
        ]}>
        {new Array(isExpanded ? 2 : 4).fill(0).map((_, i) => {
          return (
            <Animated.View
              layout={LinearTransition.duration(800)}
              exiting={FadeOut}
              entering={FadeIn}
              key={i}
              style={[
                styles.animatedBar,
                {
                  aspectRatio: isExpanded ? undefined : 1,
                  width: isExpanded ? '70%' : undefined,

                  height: isExpanded ? '20%' : '25%',
                  borderRadius: isExpanded ? 4 : 2,
                },
              ]}
            />
          );
        })}
      </Animated.View>
    </TouchableOpacity>
  );
};
