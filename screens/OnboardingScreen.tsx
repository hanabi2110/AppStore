import React, { useRef, useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from '../Style/StyleOnboarding';
import { RootStackParamList } from '../App';

const slides = [
  {
    id: '1',
    image: 'https://khoitoanstudio.com/wp-content/uploads/2024/11/sg-11134201-7repq-m1y6jb8pxbsw09.webp',
    title: 'Various Collections Of The Latest Products',
    subtitle: 'Urna amet, suspendisse ullamcorper ac elit diam facilisis cursus vestibulum.',
  },
  {
    id: '2',
    image: 'https://pos.nvncdn.com/86c7ad-50310/art/20210130_SLxq9tElmYA0Qz9zp61gcl62.jpg',
    title: 'Complete Collection Of Colors And Sizes',
    subtitle: 'Urna amet, suspendisse ullamcorper ac elit diam facilisis cursus vestibulum.',
  },
];

const OnboardingScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % slides.length;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }, 7000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={slides}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Image source={{ uri: item.image }} style={styles.image} resizeMode="cover" />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </View>
        )}
      />
      <View style={styles.pagination}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, currentIndex === index && styles.dotActive]}
          />
        ))}
      </View>

 
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

     
       <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.footerText}>Already Have an Account</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
