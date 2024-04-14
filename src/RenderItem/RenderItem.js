import React from 'react';
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
} from 'react-native-reanimated';
import {Image, Text} from 'react-native';
import {styles} from './Style';
import {data} from '../Constant/Constant';

const AnimatedImage = Animated.createAnimatedComponent(Image);

const RenderItem = ({layout = 'list'}) => {
  const isExpanded = layout === 'list';

  return (
    <Animated.ScrollView
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.containerStyle}>
      {data.map((item, i) => (
        <Animated.View
          key={i}
          layout={LinearTransition.duration(1000)}
          style={[
            styles.renderMain,
            {
              height: isExpanded ? 100 : 120,
              aspectRatio: isExpanded ? undefined : 1,
              width: isExpanded ? '90%' : `${(100 - 15) / 2}%`,
            },
          ]}>
          <Animated.View
            style={[
              styles.renderSub,
              {flexDirection: isExpanded ? 'row' : 'column'},
            ]}>
            <AnimatedImage
              source={{uri: item.img}}
              style={{
                width: isExpanded ? 64 : 200,
                aspectRatio: 1,
                borderRadius: isExpanded ? 32 : 0,
                marginHorizontal: isExpanded ? 16 : 0,
              }}
            />
            {isExpanded && (
              <Animated.View entering={FadeIn} exiting={FadeOut}>
                <Text style={styles.animatedTitle}>{item.author}</Text>
                <Text style={styles.animateDes}>{item.quote}</Text>
              </Animated.View>
            )}
          </Animated.View>
        </Animated.View>
      ))}
    </Animated.ScrollView>
  );
};

export {RenderItem};
