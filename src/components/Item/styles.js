import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerTextItem: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    zIndex: 2,
    padding: 15
  },
  textItem: {
    color: 'white',
    fontSize: 20
  },
  textDescription: {
    color: 'white'
  }
});