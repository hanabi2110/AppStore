import { StyleSheet, Dimensions } from "react-native";
const screenWidth = Dimensions.get('window').width;

const StyleHome = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 50 },
  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16 },
  avatar: { width: 40, height: 40, borderRadius: 20 },
  greeting: { fontSize: 16, fontWeight: 'bold' },
  subGreeting: { fontSize: 12, color: '#666' },

  tab: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
    marginBottom: 12,
  },
  tabText: { marginHorizontal: 20, fontSize: 14, color: '#999' },
  activeTabText: { color: '#000', fontWeight: 'bold', borderBottomWidth: 2 },

  banner: {
    flexDirection: 'row',
    backgroundColor: '#EAE8FF',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
    alignItems: 'center',
    marginBottom: 20,
  },
  bannerTitle: { fontSize: 16, fontWeight: 'bold', color: '#000' },
  bannerBy: { fontSize: 12, color: '#666', marginTop: 6 },
  bannerImage: { width: 80, height: 80, resizeMode: 'contain' },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  sectionTitle: { fontSize: 16, fontWeight: 'bold' },
  seeAll: { fontSize: 13, color: '#999' },

  card: {
    width: '48%',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  productImage: { width: '100%', height: 120, borderRadius: 10, resizeMode: 'contain' },
  productTitle: { marginTop: 8, fontSize: 14, fontWeight: '600' },
  productBrand: { fontSize: 12, color: '#888' },
  productPrice: { fontSize: 14, fontWeight: 'bold', marginTop: 4 },
  heartIcon: { position: 'absolute', top: 12, right: 12 },

  categoryCard: {
    height: 120,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  categoryOverlay: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  categoryCount: {
    fontSize: 13,
    color: '#fff',
    marginTop: 4,
  },

  bottomTab: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
  },
});

export default StyleHome;
