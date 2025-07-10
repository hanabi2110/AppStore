import React, { useState, useEffect } from 'react';
import {
  View, Text, Image, FlatList, TouchableOpacity, ActivityIndicator, StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { categoryList } from '../src/CategoryData';
import styles from '../Style/StyleHome';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App'; 

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const HomeScreen = () => {
  const [tab, setTab] = useState('Home');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    if (tab === 'Home') {
      fetchProducts();
    }
  }, [tab]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products/category/women's clothing");
      const json = await res.json();
      setProducts(json);
    } catch (err) {
      console.log('API Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const renderProduct = ({ item }: { item: Product }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <TouchableOpacity style={styles.heartIcon}>
        <Icon name="heart" size={16} color="#999" />
      </TouchableOpacity>
      <Text style={styles.productTitle} numberOfLines={1}>{item.title}</Text>
      <Text style={styles.productBrand}>Brand Unknown</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={{ uri: 'https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/08/anh-con-meo-cute.jpg' }} style={styles.avatar} />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={styles.greeting}>Hi, Khang</Text>
          <Text style={styles.subGreeting}>Let's go shopping</Text>
        </View>
        <Icon name="search" size={20} color="#000" style={{ marginRight: 15 }} />
        <Icon name="bell" size={20} color="#000" />
      </View>

      {/* Tabs */}
      <View style={styles.tab}>
        <TouchableOpacity onPress={() => setTab('Home')}>
          <Text style={[styles.tabText, tab === 'Home' && styles.activeTabText]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTab('Category')}>
          <Text style={[styles.tabText, tab === 'Category' && styles.activeTabText]}>Category</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      {tab === 'Home' ? (
        <>
          <View style={styles.banner}>
            <View style={{ flex: 1 }}>
              <Text style={styles.bannerTitle}>24% off shipping today{"\n"}on bag purchases</Text>
              <Text style={styles.bannerBy}>By Kufuku Store</Text>
            </View>
            <Image source={{ uri: 'https://cdn.coolmate.me/images/march_all/05.jpg' }} style={styles.bannerImage} />
          </View>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>New Arrivals 🔥</Text>
            <TouchableOpacity onPress={() => navigation.navigate('ProductList')}>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>

          {loading ? (
            <ActivityIndicator size="large" color="#333" style={{ marginTop: 20 }} />
          ) : (
            <FlatList
              data={products}
              numColumns={2}
              keyExtractor={(item) => item.id.toString()}
              contentContainerStyle={{ paddingHorizontal: 16 }}
              columnWrapperStyle={{ justifyContent: 'space-between' }}
              renderItem={renderProduct}
            />
          )}
        </>
      ) : (
        <View style={{ paddingHorizontal: 16 }}>
          {categoryList.map((cat) => (
            <TouchableOpacity key={cat.id} style={styles.categoryCard}>
              <Image source={{ uri: cat.image }} style={styles.categoryImage} />
              <View style={styles.categoryOverlay}>
                <Text style={styles.categoryTitle}>{cat.name}</Text>
                <Text style={styles.categoryCount}>{cat.count} Product</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default HomeScreen;
