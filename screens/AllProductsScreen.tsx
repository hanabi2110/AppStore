import React, { useEffect, useState } from 'react';
import {
  View, Text, FlatList, Image, TouchableOpacity,
  SafeAreaView, StatusBar, ScrollView
} from 'react-native';
import { getAllProducts } from '../src/database';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../Style/StyleProductList';

type Product = {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: number;
  image: string;
};

const AllProductsScreen = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [brands, setBrands] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    getAllProducts()
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);

        const brandList = Array.from(new Set(data.map((item) => item.brand)));
        const categoryList = Array.from(new Set(data.map((item) => item.category)));

        setBrands(['All', ...brandList]);
        setCategories(['All', ...categoryList]);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    applyFilters();
  }, [selectedBrand, selectedCategory]);

  const applyFilters = () => {
    let result = [...products];
    if (selectedBrand !== 'All') {
      result = result.filter(item => item.brand === selectedBrand);
    }
    if (selectedCategory !== 'All') {
      result = result.filter(item => item.category === selectedCategory);
    }
    setFilteredProducts(result);
  };

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

  const renderFilterBar = (
    items: string[],
    selected: string,
    setSelected: (val: string) => void
  ) => (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 16 }}
      style={{ marginVertical: 10 }}
    >
      {items.map((item, index) => (
        <TouchableOpacity
          key={`${item}-${index}`}
          onPress={() => setSelected(item)}
          style={{
            height: 40,
            paddingHorizontal: 20,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: selected === item ? '#000' : '#f0f0f0',
            borderRadius: 20,
            marginRight: 12,
            borderWidth: 1,
            borderColor: selected === item ? '#000' : '#f0f0f0',
          }}
        >
          <Text
            style={{
              color: selected === item ? '#fff' : '#333',
              fontWeight: '600',
              fontSize: 14,
              textAlign: 'center',
            }}
          >
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={{ height: 40 }} /> 
      <View style={{ paddingHorizontal: 16, marginTop: 12, marginBottom: 2 }}>
        <Text style={{ fontWeight: '600', fontSize: 17, marginBottom: 2 }}>
          Category
        </Text>
        {renderFilterBar(categories, selectedCategory, setSelectedCategory)}
      </View>
      <View style={{ paddingHorizontal: 16, marginBottom: 2 }}>
        <Text style={{ fontWeight: '600', fontSize: 17, marginBottom: 2 }}>
          Brand
        </Text>
        {renderFilterBar(brands, selectedBrand, setSelectedBrand)}
      </View>

      <FlatList
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.productList}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
      />
    </SafeAreaView>
  );
};

export default AllProductsScreen;
