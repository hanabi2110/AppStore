import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../Style/StyleProductList'
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const ProductListScreen = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const renderItem = ({ item }: { item: Product }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
      <Text style={styles.price}>${item.price}</Text>
      <Icon name="heart" size={16} color="#999" style={styles.heartIcon} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>All Women's Clothing</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <FlatList
          data={products}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default ProductListScreen;


