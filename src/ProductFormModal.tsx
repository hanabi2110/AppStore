import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, Modal, TouchableOpacity, StyleSheet, Image
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

interface Props {
  visible: boolean;
  onClose: () => void;
  onSave: (data: { name: string; brand: string; price: number; image: string ; category: string}) => void;
  product?: any;
}

const ProductFormModal: React.FC<Props> = ({ visible, onClose, onSave, product }) => {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [category,setcategory] = useState('');
  useEffect(() => {
    if (product) {
      setName(product.name);
      setBrand(product.brand);
      setPrice(product.price.toString());
      setImage(product.image);
      setcategory(product.category);
    } else {
      setName('');
      setBrand('');
      setPrice('');
      setImage('');
      setcategory('');
    }
  }, [product]);

  const handleSelectImage = () => {
    launchImageLibrary({ mediaType: 'photo' }, response => {
      if (response.didCancel) return;
      if (response.errorMessage) {
        console.log('ImagePicker Error:', response.errorMessage);
        return;
      }
      if (response.assets && response.assets.length > 0) {
        setImage(response.assets[0].uri || '');
      }
    });
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.title}>{product ? 'Edit Product' : 'Add Product'}</Text>
          <TextInput placeholder="Name" value={name} onChangeText={setName} style={styles.input} />
          <TextInput placeholder="Brand" value={brand} onChangeText={setBrand} style={styles.input} />
          <TextInput placeholder="Price (USD)" keyboardType="numeric" value={price} onChangeText={setPrice} style={styles.input} />
          <TouchableOpacity onPress={handleSelectImage} style={styles.imagePickerButton}>
            <Text style={styles.imagePickerText}>Choose Image</Text>
          </TouchableOpacity>
          {image ? <Image source={{ uri: image }} style={{ width: 100, height: 100, marginVertical: 10, borderRadius: 6 }} /> : null}
          <View style={styles.row}>
            <TouchableOpacity onPress={onClose} style={styles.cancelBtn}><Text>Cancel</Text></TouchableOpacity>
            <TouchableOpacity
              style={styles.saveBtn}
              onPress={() => {
                if (name && brand && price && image) {
                  onSave({ name, brand, price: parseFloat(price), image, category });
                  onClose();
                }
              }}>
              <Text style={{ color: '#fff' }}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ProductFormModal;

const styles = StyleSheet.create({
  overlay: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000000aa' },
  modal: { width: '90%', backgroundColor: '#fff', padding: 20, borderRadius: 10 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 12 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 6, marginBottom: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  cancelBtn: { padding: 10 },
  saveBtn: { padding: 10, backgroundColor: '#2196F3', borderRadius: 6 },
  imagePickerButton: { backgroundColor: '#eee', padding: 10, borderRadius: 6, alignItems: 'center', marginBottom: 10 },
  imagePickerText: { color: '#333' },
});
