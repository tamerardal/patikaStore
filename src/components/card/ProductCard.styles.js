import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 5,
  },
  cardContainer: {
    flex: 1,
    backgroundColor: 'lightgray',
    padding: 8,
    borderRadius: 5,
  },
  imageUrl: {
    height: Dimensions.get('window').height / 4,
    borderRadius: 8,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
  },
  price: {},
  searchBar: {
    backgroundColor: 'lightgray',
    borderRadius: 8,
    padding: 8,
    margin: 5,
  },
});
