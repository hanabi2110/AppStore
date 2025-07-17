import { Platform, StatusBar } from "react-native";
import { StyleSheet, Dimensions } from "react-native";

const StyleHome = StyleSheet.create({
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
});

export default StyleHome;
