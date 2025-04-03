import {StyleSheet, Text, View, Image} from 'react-native';
import Brand1 from '../assets/brand1.jpeg';
import Brand2 from '../assets/brand2.jpeg';
import Brand3 from '../assets/brand3.jpeg';
import Brand4 from '../assets/brand4.jpeg';

const brandsData = [
  {
    id: 1,
    image: Brand1,
    title: 'Min. 20% off | Fossil, Titan Smart Watch & More',
  },
  {
    id: 2,
    image: Brand2,
    title: 'Min. 20% off | Fossil, Titan Smart Watch & More',
  },
  {
    id: 3,
    image: Brand3,
    title: 'Heels - Upto 50% OFF on Heeled Sandals, High Heel',
  },
  {
    id: 4,
    image: Brand4,
    title: 'Sony 60W Bluetooth SoundBar Speaker Audio Engine',
  },
];

const Brands = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Brands of Day</Text>
      {[0, 2].map(index => (
        <View key={`row-${index}`} style={styles.row}>
          {brandsData.slice(index, index + 2).map(brand => (
            <View key={brand.id} style={styles.brands}>
              <Image source={brand.image} style={styles.imgStyle} />
              <Text style={styles.brandTitle}>{brand.title}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

export default Brands;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#dddddd',
  },
  title: {
    fontSize: 18,
    color: '#000000',
    padding: 10,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
  },
  brands: {
    width: '50%',
    padding: 4,
  },
  imgStyle: {
    height: 150,
    width: '100%',
    borderRadius: 10,
  },
  brandTitle: {
    color: '#000000',
    fontSize: 12,
    marginTop: 5,
  },
});
