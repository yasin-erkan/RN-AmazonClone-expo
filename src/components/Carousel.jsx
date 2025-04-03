import {StyleSheet, Image, View} from 'react-native';
import Swiper from 'react-native-swiper';
import {CarouselData} from '../data/CarouselData';

const Carousel = () => {
  return (
    <Swiper autoplay={true} showsPagination={false} style={styles.wrapper}>
      {CarouselData.map(item => (
        <View key={item.id} style={styles.slide}>
          <Image source={item.image} style={styles.imgStyle} />
        </View>
      ))}
    </Swiper>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  imgStyle: {
    width: '100%',
    height: 250,
  },
  wrapper: {
    height: 300,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
