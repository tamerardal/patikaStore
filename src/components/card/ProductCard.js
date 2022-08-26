import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './ProductCard.styles';

const ProductCard = ({product}) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Image style={styles.imageUrl} source={{uri: product.imgURL}} />
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{product.price}</Text>
        <Text style={styles.inStock}>
          {product.inStock === true ? 'Stokta Var' : 'Stokta Yok'}
        </Text>
      </View>
    </View>
  );
};

export default ProductCard;
