import { StyleSheet, Dimensions } from "react-native";
const screenWidth = Dimensions.get('window').width;

const StyleHome = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingTop: 50,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  greeting: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  subGreeting: {
    fontSize: 13,
    color: '#888',
  },

  tab: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  tabText: {
    marginHorizontal: 20,
    fontSize: 14,
    paddingBottom: 8,
    color: '#999',
  },
  activeTabText: {
    color: '#000',
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderColor: '#333',
  },

  banner: {
    flexDirection: 'row',
    backgroundColor: '#FFEFE8',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
    alignItems: 'center',
    marginBottom: 24,
  },
  bannerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  bannerBy: {
    fontSize: 12,
    color: '#999',
    marginTop: 6,
  },
  bannerImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  seeAll: {
    fontSize: 13,
    color: '#888',
  },

  card: {
    width: '48%',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 3,
  },
  productImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  productTitle: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  productBrand: {
    fontSize: 12,
    color: '#777',
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 4,
    color: '#E53935',
  },
  heartIcon: {
    position: 'absolute',
    top: 12,
    right: 12,
  },

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
