import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, FlatList, Image, StyleSheet, TouchableOpacity, StatusBar, Platform, ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { getAllProducts } from '../src/database';
import { useNavigation } from '@react-navigation/native';

type Product = {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
};

const HomeScreen = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    getAllProducts()
      .then((data) => {
        setProducts(data.slice(0, 6));
        console.log("DATA FROM DB:", data);
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

        <View style={styles.navTabs}>
          <Text style={[styles.tab, styles.activeTab]}>Home</Text>
          <Text style={styles.tab}>Category</Text>
        </View>

        <View style={styles.banner}>
          <Text style={styles.bannerText}>24% off shipping today on bag purchases</Text>
          <Text style={styles.bannerSub}>By Kutuku Store</Text>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>New Arrivals 🔥</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>

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

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scrollContainer: { paddingHorizontal: 16, paddingBottom: 24 },
  safeTopSpace: {
    height: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  headerTopRight: {
    flex: 1,
    marginLeft: 10,
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 12,
  },
  iconBtn: {
    marginLeft: 12,
  },
  greeting: { fontSize: 18, fontWeight: 'bold' },
  subGreeting: { fontSize: 14, color: '#888' },
  avatar: { width: 40, height: 40, borderRadius: 20 },
  navTabs: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 10,
  },
  tab: {
    fontSize: 16,
    marginRight: 20,
    color: '#999',
  },
  activeTab: {
    color: '#5F2EEA',
    borderBottomWidth: 2,
    borderColor: '#5F2EEA',
    paddingBottom: 4,
  },
  banner: {
    backgroundColor: '#EEE6FD',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  bannerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },
  bannerSub: { fontSize: 13, color: '#555', marginTop: 4 },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: { fontSize: 16, fontWeight: 'bold' },
  seeAll: { fontSize: 13, color: '#5F2EEA' },
  productList: { gap: 16 },
  productCard: {
    width: '48%',
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
    padding: 10,
    marginBottom: 16,
    position: 'relative',
  },
  productImage: { width: '100%', height: 120, borderRadius: 8 },
  productName: { fontSize: 14, fontWeight: 'bold', marginTop: 8 },
  productBrand: { fontSize: 12, color: '#666' },
  productPrice: { fontSize: 13, color: '#000', marginTop: 4 },
  heartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#fff',
    padding: 4,
    borderRadius: 12,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
});

export default HomeScreen;
