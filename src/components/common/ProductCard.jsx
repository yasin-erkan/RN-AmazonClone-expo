import React from 'react';
import {TouchableOpacity, Image, View, Text, StyleSheet} from 'react-native';
import {globalStyles, SPACING, FONTS} from '../../utils/globalStyles';
import {COLORS} from '../../utils/colors';

const ProductCard = ({image, title, price, discount}) => {
  return (
    <TouchableOpacity
      style={[styles.card, globalStyles.shadow]}
      activeOpacity={0.7}>
      <Image source={image} style={styles.image} />
      {discount && (
        <View style={styles.discountTag}>
          <Text style={styles.discountText}>{discount}% Off</Text>
        </View>
      )}
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
      <Text style={styles.price}>₺{price}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    padding: SPACING.sm,
    margin: SPACING.xs,
    width: 160,
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 4,
  },
  discountTag: {
    position: 'absolute',
    top: SPACING.sm,
    right: SPACING.sm,
    backgroundColor: COLORS.accent,
    padding: SPACING.xs,
    borderRadius: 4,
  },
  discountText: {
    color: COLORS.white,
    ...FONTS.bold,
    fontSize: 12,
  },
  title: {
    ...FONTS.medium,
    fontSize: 14,
    marginTop: SPACING.sm,
    color: COLORS.primary,
  },
  price: {
    ...FONTS.bold,
    fontSize: 16,
    color: COLORS.accent,
    marginTop: SPACING.xs,
  },
});

export default ProductCard;
