import { Platform, StatusBar, StyleSheet } from "react-native";

const StyleProductList = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 16 },
  safeTopSpace: { height: Platform.OS === 'android' ? StatusBar.currentHeight : 0 },
  header: { fontSize: 20, fontWeight: 'bold', marginVertical: 16 },
  productList: { gap: 16, paddingBottom: 16 },
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
});

export default StyleProductList;