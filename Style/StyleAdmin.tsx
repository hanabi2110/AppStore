import { StyleSheet } from "react-native";
 const StyleAdmin = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f2f2' },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 16 },
  header: { fontSize: 20, fontWeight: 'bold' },
  exitBtn: { backgroundColor: '#ff4d4d', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 6 },
  exitText: { color: '#fff', fontWeight: 'bold' },
  searchInput: { backgroundColor: '#fff', marginHorizontal: 16, padding: 10, borderRadius: 6, marginBottom: 10 },
  categoryBar: { flexDirection: 'row', paddingHorizontal: 10, marginBottom: 10 },
  categoryBtn: { paddingHorizontal: 10, paddingVertical: 6, marginHorizontal: 4, borderRadius: 16, backgroundColor: '#ddd' },
  activeCat: { backgroundColor: '#007bff' },
  catText: { color: '#333' },
  activeCatText: { color: '#fff' },
  card: { flexDirection: 'row', backgroundColor: '#fff', padding: 12, borderRadius: 8, marginBottom: 10, alignItems: 'center' },
  image: { width: 80, height: 80, borderRadius: 6 },
  name: { fontWeight: 'bold', fontSize: 16 },
  brand: { color: '#666' },
  price: { color: '#333', marginTop: 4 },
  row: { flexDirection: 'row', justifyContent: 'flex-start', gap: 16, marginTop: 8 },
  addButton: { backgroundColor: '#007bff', marginHorizontal: 16, marginVertical: 10, paddingVertical: 10, borderRadius: 6, alignItems: 'center' },
  addText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
export default StyleAdmin;