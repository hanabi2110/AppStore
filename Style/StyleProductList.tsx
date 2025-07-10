import { StyleSheet } from "react-native";

const StyleProductList = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 50 },
  header: { fontSize: 18, fontWeight: 'bold', paddingHorizontal: 16, marginBottom: 16 },
  card: {
    width: '48%',
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 10,
    marginBottom: 20,
    position: 'relative',
  },
  image: { width: '100%', height: 120, resizeMode: 'contain', borderRadius: 8 },
  title: { fontSize: 14, fontWeight: '600', marginTop: 8 },
  price: { fontSize: 14, fontWeight: 'bold', color: '#000', marginTop: 4 },
  heartIcon: { position: 'absolute', top: 10, right: 10 },
});

export default StyleProductList;