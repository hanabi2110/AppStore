import { StyleSheet, Dimensions } from "react-native";
const screenWidth = Dimensions.get('window').width;

const StyleHome = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  greeting: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subGreeting: {
    fontSize: 12,
    color: '#999',
  },

  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  tabText: {
    fontSize: 16,
    color: '#999',
    paddingBottom: 6,
  },
  activeTab: {
    color: '#5C4DB1',
    borderBottomWidth: 2,
    borderBottomColor: '#5C4DB1',
  },

  banner: {
    backgroundColor: '#EAE6FD',
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 16,
    marginTop: 16,
  },
  bannerText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  bannerSubText: {
    marginTop: 4,
    color: '#666',
    fontSize: 12,
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 20,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  seeAll: {
    color: '#5C4DB1',
    fontWeight: '500',
    fontSize: 13,
  },

  productCard: {
    width: screenWidth * 0.45,
    backgroundColor: '#F9F9F9',
    borderRadius: 16,
    marginRight: 16,
    padding: 10,
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: 120,
    borderRadius: 12,
    marginBottom: 8,
  },
  productName: {
    fontWeight: '600',
    fontSize: 14,
  },
  productBrand: {
    color: '#888',
    fontSize: 12,
  },
  productPrice: {
    fontWeight: 'bold',
    marginTop: 4,
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 6,
    elevation: 2,
  },
});

export default StyleHome;
