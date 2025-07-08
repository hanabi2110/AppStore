import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../Style/StyleHome'

const products = [
  {
    id: '1',
    name: 'The Mirac Jiz',
    brand: 'Lisa Robber',
    price: '$195.00',
    image: 'https://pos.nvncdn.com/a83b91-49827/ps/20230405_mys9qRt2vW.jpeg',
  },
  {
    id: '2',
    name: 'Meriza Kiles',
    brand: 'Gazuna Resika',
    price: '$143.45',
    image: 'https://product.hstatic.net/200000690725/product/tui-xach-nu-thoi-trang-nuc-txc018-1_35318e9e5087409eb5e253901de0db7f_large.jpg',
  },
];

const HomeScreen = () => {
  const [tab, setTab] = useState('Home');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
          style={styles.avatar}
        />
        <View style={{ flex: 1, marginLeft: 12 }}>
          <Text style={styles.greeting}>Hi, Jonathan</Text>
          <Text style={styles.subGreeting}>Let's go shopping</Text>
        </View>
        <Icon name="bell" size={20} color="#000" />
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => setTab('Home')}>
          <Text style={[styles.tabText, tab === 'Home' && styles.activeTab]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTab('Category')}>
          <Text style={[styles.tabText, tab === 'Category' && styles.activeTab]}>Category</Text>
        </TouchableOpacity>
      </View>

      {/* Banner */}
      <View style={styles.banner}>
        <Text style={styles.bannerText}>24% off shipping today{"\n"}on bag purchases</Text>
        <Text style={styles.bannerSubText}>By Kufuku Store</Text>
      </View>

      {/* Section Title */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>New Arrivals 🔥</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      {/* Product List */}
      <FlatList
        data={products}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productBrand}>{item.brand}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
            <TouchableOpacity style={styles.heartIcon}>
              <Icon name="heart" size={16} color="#999" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};
export default HomeScreen;