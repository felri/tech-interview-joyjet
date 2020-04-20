import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerInfo: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 18,
    letterSpacing: 2
  },
  category: {
    color: "#3694de",
    fontSize: 13
  },
  description: {
    marginTop: 20,
    lineHeight: 24
  },
  containerBackBtn: {
    position: 'absolute',
    top: 15,
    left: 10,
    zIndex: 2,
    alignItems: 'center',
    justifyContent: 'center',

  },
  containerFavoriteBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
});