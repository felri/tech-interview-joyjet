import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#434343',
    flex: 1,
    paddingTop: 60
  },
  containerItems: {
    flex: 3
  },
  containerBottom: {
    flex: 1,
    maxHeight: 200,
    borderTopColor: '#363636',
    borderTopWidth: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  containerName: {
    width: '100%',
    marginLeft: 20,
    marginBottom: 10
  },
  containerImage: {
    width: '100%',
    alignItems: 'flex-end',
    marginRight: 40,
    marginBottom: 20
  },
  label: {
    fontSize: 23,
    fontWeight: '500'
  },
  containerLabel: {
    alignItems: 'flex-end',
    backgroundColor: 'red',
    width: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textName: {
    fontSize: 25,
    color: 'white',

  }
});