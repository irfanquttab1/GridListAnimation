import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 50,
    right: 16,
    height: 50,
    aspectRatio: 1,
    borderRadius: 35,
    backgroundColor: 'white',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    justifyContent: 'center',
  },
  animatedView: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 5,
  },
  animatedBar: {
    alignSelf: 'center',
    margin: 2,
    backgroundColor: 'teal',
  },
});
