import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get('window');

const StyleOnboarding = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  slide: {
    width,
    paddingHorizontal: 24,
    alignItems: 'center',
    paddingTop: 60,
  },
  image: {
    width: '100%',
    height: 400,
    borderRadius: 36, 
    marginTop: 40,
    marginBottom: 32, 
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: '#1D1D1D',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#9E9E9E',
    paddingHorizontal: 24,
    lineHeight: 20,
    marginBottom: 28,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 32,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 4,
  },
  dotActive: {
    backgroundColor: '#5C4DB1',
    width: 24, 
    borderRadius: 12,
  },
  button: {
    backgroundColor: '#5C4DB1',
    paddingVertical: 16,
    borderRadius: 32,
    alignItems: 'center',
    marginHorizontal: 24,
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  footerText: {
    color: '#5C4DB1',
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 24,
  },
});

export default StyleOnboarding;
