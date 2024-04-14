import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerStyle: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  renderMain: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 20,
    marginLeft: '5%',
    overflow: 'hidden',
  },
  renderSub: {
    flex: 1,
    alignItems: 'center',
  },
  animatedTitle: {
    marginBottom: 2,
    maxWidth: '80%',
    color: 'black',
    fontSize: 14,
    fontWeight: '500',
  },
  animateDes: {
    color: '#383838',
    fontSize: 12,
    maxWidth: 200,
    textAlign: 'justify',
  },
});
