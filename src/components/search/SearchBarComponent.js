import React from 'react';
import {TextInput, View} from 'react-native';
import styles from '../card/ProductCard.styles';

const SearchBarComponent = () => {
  return (
    <View>
      <TextInput placeholder="Ara.." style={styles.searchBar} />
    </View>
  );
};

export default SearchBarComponent;
