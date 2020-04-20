import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  opacity: {
    width: '100%',
    zIndex: 2,
    height: 300,
    position: 'absolute',
    backgroundColor: 'black',
    opacity: 0.5,
  },
  containerLeftArrow: {
    position: 'absolute',
    left: 0,
    height: '100%',
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    width: 50
  },
  containerRightArrow: {
    position: 'absolute',
    right: 0,
    height: '100%',
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    width: 50
  }

});