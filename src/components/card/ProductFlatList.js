/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList} from 'react-native';
import product_data from '../../product_data.json';
import SearchBarComponent from '../search/SearchBarComponent';
import ProductCard from './ProductCard';

const ProductFlatList = () => {
  const renderProducts = ({item}) => <ProductCard product={item} />;
  const renderKeys = item => item.id.toString();
  return (
    <FlatList
      style={{marginBottom: 50}}
      numColumns={2}
      keyExtractor={renderKeys}
      renderItem={renderProducts}
      data={product_data}
      ListHeaderComponent={() => <SearchBarComponent />}
    />
  );
};

export default ProductFlatList;
