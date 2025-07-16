import React, { useEffect, useState } from 'react';
import {
  View, Text, FlatList, TouchableOpacity, Image, Alert, TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import ProductFormModal from '../src/ProductFormModal';
import {
  initProductTable, getAllProducts, insertProduct, updateProduct, deleteProduct,
} from '../src/database';
import mockData from '../asset/mock_clothing_data.json';
import { useNavigation } from '@react-navigation/native';
import styles from '../Style/StyleAdmin';

const AdminProductScreen = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingProduct, setEditingProduct] = useState<any | null>(null);
  const [searchText, setSearchText] = useState('');
  const [category, setCategory] = useState('All');

  const navigation = useNavigation();

  useEffect(() => {
    initProductTable().then(() => {
      loadData();
    });
  }, []);

  const loadData = () => {
    getAllProducts()
      .then(data => {
        if (data.length === 0) {
          importMockData();
        } else {
          setProducts(data);
          filterData(searchText, category, data);
        }
      })
      .catch(console.error);
  };

  const importMockData = async () => {
    try {
      for (const item of mockData) {
        await insertProduct(item.name, item.brand, item.price, item.image);
      }
      loadData();
    } catch (err) {
      console.log('Failed to import mock data:', err);
    }
  };

  const handleDelete = (id: number) => {
    Alert.alert('Confirm', 'Delete this product?', [
      { text: 'Cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => {
          deleteProduct(id).then(loadData);
        },
      },
    ]);
  };

  const handleSearch = (text: string) => {
    setSearchText(text);
    filterData(text, category);
  };

  const handleFilter = (cat: string) => {
    setCategory(cat);
    filterData(searchText, cat);
  };

  const filterData = (text: string, cat: string, dataSource?: any[]) => {
    let filtered = [...(dataSource || products)];

    if (cat !== 'All') {
      filtered = filtered.filter(p => p.brand.toLowerCase() === cat.toLowerCase());
    }

    if (text) {
      filtered = filtered.filter(p => p.name.toLowerCase().includes(text.toLowerCase()));
    }

    setFilteredProducts(filtered);
  };

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={{ flex: 1, marginLeft: 10 }}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.brand}>{item.brand}</Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => {
            setEditingProduct(item);
            setModalVisible(true);
          }}>
            <Icon name="edit" size={20} color="#007bff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDelete(item.id)}>
            <Icon name="trash-2" size={20} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const categoryList = Array.from(new Set(['All', ...products.map(p => p.brand)]));

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.header}>Admin Product Manager</Text>
        <TouchableOpacity style={styles.exitBtn} onPress={() => navigation.navigate('Login' as never)}>
          <Text style={styles.exitText}>Exit</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="Search by name"
        value={searchText}
        onChangeText={handleSearch}
      />

      <View style={styles.categoryBar}>
        {categoryList.map(cat => (
          <TouchableOpacity
            key={cat}
            style={[styles.categoryBtn, category === cat && styles.activeCat]}
            onPress={() => handleFilter(cat)}>
            <Text style={category === cat ? styles.activeCatText : styles.catText}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 16 }}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          setEditingProduct(null);
          setModalVisible(true);
        }}>
        <Text style={styles.addText}>Add</Text>
      </TouchableOpacity>

      <ProductFormModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={(data) => {
          if (editingProduct) {
            updateProduct(editingProduct.id, data.name, data.brand, data.price, data.image).then(loadData);
          } else {
            insertProduct(data.name, data.brand, data.price, data.image).then(loadData);
          }
          setEditingProduct(null);
        }}
        product={editingProduct}
      />
    </View>
  );
};

export default AdminProductScreen;
