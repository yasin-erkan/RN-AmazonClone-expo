import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const ProductCard = ({image, title, price, discount}) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      {discount && (
        <View style={styles.discountContainer}>
          <Text style={styles.discountText}>{discount}% off</Text>
        </View>
      )}
      <Text numberOfLines={2} style={styles.title}>
        {title}
      </Text>
      <Text style={styles.price}>₺{price}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginRight: 12,
    padding: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 4,
  },
  discountContainer: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#cc0c39',
    padding: 4,
    borderRadius: 4,
  },
  discountText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 14,
    marginTop: 8,
    color: '#232f3e',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#232f3e',
    marginTop: 4,
  },
});

export default ProductCard;
