import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, FlatList, Image, StyleSheet, TouchableOpacity, StatusBar, Platform, ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { getAllProducts } from '../src/database';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App'; 
import styles from '../Style/StyleHome'

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'MainTab'>;
type Product = {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
};

const HomeScreen = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigation = useNavigation<HomeScreenNavigationProp>();

  useEffect(() => {
    getAllProducts()
      .then((data) => {
        setProducts(data.slice(0, 6)); 
        console.log('DATA FROM DB:', data);
      })
      .catch(console.error);
  }, []);

  const renderItem = ({ item }: { item: Product }) => (
    <View style={styles.productCard}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productBrand}>{item.brand}</Text>
      <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
      <TouchableOpacity style={styles.heartIcon}>
        <Icon name="heart" size={18} color="#999" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.safeTopSpace} />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.headerTop}>
          <Image
            source={require('../asset/avatar.jpg')}
            style={styles.avatar}
          />
          <View style={styles.headerTopRight}>
            <Text style={styles.greeting}>Hi, Jonathan</Text>
            <Text style={styles.subGreeting}>Let's go shopping</Text>
          </View>
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconBtn}>
              <Icon name="search" size={24} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBtn}>
              <Icon name="bell" size={24} color="#000" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Tabs */}
        <View style={styles.navTabs}>
          <Text style={[styles.tab, styles.activeTab]}>Home</Text>
          <Text style={styles.tab}>Category</Text>
        </View>

        {/* Banner */}
        <View style={styles.banner}>
          <Text style={styles.bannerText}>
            24% off shipping today on bag purchases
          </Text>
          <Text style={styles.bannerSub}>By Kutuku Store</Text>
        </View>

        {/* Section Header */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>New Arrivals 🔥</Text>
          <TouchableOpacity onPress={() => navigation.navigate('AllProducts')}>
          <Text>See All</Text>
          </TouchableOpacity>
        </View>

        {/* Product List */}
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal={false}
          numColumns={2}
          contentContainerStyle={styles.productList}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          scrollEnabled={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};


export default HomeScreen;
